import UniversalRouter from "universal-router";
import { routes } from "./routes.ts";
import { makeDocument, makeScript } from "./utils/DOM.ts";

const router = new UniversalRouter(routes);

type DefinedApp = {
  appName: string;
  initialized: boolean;
  init?(): () => void;
  unmount?(): void;
};

let definedApps: Record<string, DefinedApp> = {};

async function getApp(appName: string) {
  let response: Response;

  switch (appName) {
    case "header":
      response = await fetch("http://localhost:8004/");
      break;
    case "home":
      response = await fetch("http://localhost:8003/");
      break;
    case "chat":
      response = await fetch("http://localhost:8006/");
      break;
    default:
      console.error(`getApp - ${appName}`);
      return null;
  }

  return response;
}

export async function renderRouteClient(pathname: string) {
  let templateData = await getTemplate(pathname);

  // inner redirect on same template type
  if (templateData === true) {
    return true;
  }

  // first render
  if (templateData === false) {
    Object.values(definedApps).forEach((obj) => {
      obj.unmount = obj.init?.();
      obj.initialized = true;
    });

    return true;
  }

  const newParentWrapper = document.createElement("div");

  newParentWrapper.innerHTML = templateData.template;

  console.log(newParentWrapper.children[0], definedApps);

  const results = await makeRoute(templateData.template);

  results?.forEach((result) => {
    if (!result) {
      console.error("renderRouteClient - 2 - result === null");
      return null;
    }

    const { appName, resultHTML, resultHead } = result;

    if (definedApps[appName]) {
      // move
      if (definedApps[appName].initialized) {
        const app = document.getElementById(`${appName}-body`);

        setHTML(newParentWrapper, app, appName);
        return true;
      }

      // recreate
      setHTML(newParentWrapper, resultHTML, appName);

      const init = definedApps[appName].init;
      if (!init) {
        console.error("renderRouteClient - 6 - init === null");
        return null;
      }

      init();

      return true;
    }

    setHTML(newParentWrapper, resultHTML, appName);

    // fresh create
    setHead(appName, resultHead, () => {
      // todo
    });
  });

  const wrapper = document.querySelector("[data-app]");

  if (!wrapper) {
    console.error("renderRouteClient - 7 - wrapper === null");
    return null;
  }

  wrapper.innerHTML = "";

  wrapper.appendChild(newParentWrapper.children[0]);
}

function setHTML(
  newParentWrapper: HTMLElement,
  app: HTMLElement | null,
  appName: string,
) {
  if (app === null) {
    console.error("renderRouteClient - 3 - app === null");
    return null;
  }

  const dataApp = newParentWrapper.querySelector(`[data-app="${appName}"]`);

  if (!dataApp) {
    console.error("renderRouteClient - 4 - dataApp === null");
    return null;
  }

  dataApp.appendChild(app);
}

function setHead(appName: string, resultHead: Node[], init: () => void) {
  const appHead = document.head as HTMLElement;

  resultHead.forEach((el) => {
    if (el.nodeName === "SCRIPT") {
      el = makeScript(el, appName, init);
    }

    appHead.appendChild(el);
  });
}

export async function renderRouteServer(pathname: string) {
  let templateData = await getTemplate(pathname);
  let html = "";
  let head = "";
  const definedApps: Record<string, DefinedApp> = {};

  if (templateData === true || templateData === false) {
    console.error("renderRouteServer - templateData === boolean");
    return null;
  }

  html = templateData.template;

  const results = await makeRoute(templateData.template);

  results?.forEach((result) => {
    if (!result) {
      console.error("renderRouteServer - result === null");
      return null;
    }

    const { appName, resultHTML, resultHead } = result;

    if (!resultHTML) {
      console.error("renderRouteServer - resultHTML === null");
      return null;
    }

    html = html.replace(
      `<div data-app="${appName}"></div>`,
      `<div data-app="${appName}">${resultHTML.outerHTML}</div>`,
    );

    head += resultHead.map((el) => (el as HTMLElement).outerHTML).join("");

    definedApps[appName] = { appName, initialized: false };
  });

  head += `<script>window.currentTemplateType = "${templateData.type}";</script>`;

  return { html, head };
}

export async function makeRoute(template: string) {
  const renderedDoc = await makeDocument(template);

  if (!renderedDoc) {
    console.error("makeRoute - renderedDoc === null");
    return null;
  }

  const appNodes = renderedDoc.querySelectorAll("[data-app]");

  return await Promise.all(
    Array.from(appNodes).map(async (element) => {
      const el = element as HTMLElement;

      const appName = el.getAttribute("data-app");

      if (!appName) {
        console.error("makeRoute - appName === null");
        return null;
      }

      const response = await getApp(appName);

      if (!response) {
        console.error("makeRoute - response === null");
        return null;
      }

      if (!response.ok) {
        console.error(response.statusText);
        return null;
      }

      const html = await response.text();
      const doc = await makeDocument(html);
      if (!doc) {
        console.error("makeRoute - doc === null");
        return null;
      }

      const resultHTML = doc.getElementById(`${appName}-body`);

      const head = doc.getElementsByTagName(`head`)[0];

      let insert = false;
      const resultHead = Array.from(head.childNodes).filter((element) => {
        const el = element as Node;

        if (el.nodeType === 8 && el.textContent === "inserted-content-start") {
          return (insert = true);
        }

        if (!insert) return false;

        return el;
      });

      return { appName, resultHTML, resultHead };
    }),
  );
}

let currentTemplateType = "initialize-me";

export async function getTemplate(
  pathname: string,
): Promise<{ template: string; type: string } | boolean> {
  let routeConfig = await router.resolve({ pathname });

  console.log({ routeConfig, pathname, currentTemplateType });

  if (!routeConfig?.templateType) {
    console.log("No template type specified", { pathname, routeConfig });

    routeConfig = { templateType: "404" };
  }

  if (routeConfig.templateType === currentTemplateType) {
    // first app init on client
    if (Object.values(definedApps).some(({ initialized }) => !initialized)) {
      return false;
    }

    return true;
  }

  currentTemplateType = routeConfig.templateType;

  let template: { default: string };

  switch (routeConfig.templateType) {
    case "home":
      template = await import("./templates/home.html?raw");
      break;
    case "chat":
      template = await import("./templates/chat.html?raw");
      break;
    default:
      template = await import("./templates/404.html?raw");
  }

  return { template: template.default, type: routeConfig.templateType };
}

async function navigateTo(pathname: string) {
  // Меняем URL в адресной строке без перезагрузки страницы
  window.history.pushState({}, "", pathname);
  // Рендерим соответствующий контент
  await renderRouteClient(pathname);
}

export function addEventListeners() {
  document.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;
    // Проверим, клик ли по ссылке (<a>)
    if (target.matches("a")) {
      // Проверим, что это внутренняя ссылка (начинается со "/")
      // и не содержит протокола http(s): и т.д.
      const url = target.getAttribute("href");
      if (url && url.startsWith("/")) {
        // Останавливаем стандартное поведение ссылки
        event.preventDefault();
        // Переходим через наш navigateTo
        await navigateTo(url);
      }
    }
  });

  // 4. Слушаем событие popstate (нажатие назад/вперёд в браузере)
  window.addEventListener("popstate", async () => {
    // При popstate, текущий путь хранится в location.pathname
    await renderRouteClient(window.location.pathname);
  });

  // 5. При первой загрузке страницы рендерим контент
  //    на основе текущего location.pathname
  window.addEventListener("DOMContentLoaded", async () => {
    definedApps = window.definedApps;
    currentTemplateType = window.currentTemplateType;

    await renderRouteClient(window.location.pathname);
  });
}
