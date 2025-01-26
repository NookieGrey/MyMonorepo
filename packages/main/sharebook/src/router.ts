import UniversalRouter from "universal-router";
import { routes } from "./routes.ts";

const router = new UniversalRouter(routes);

async function renderRoute(pathname: string) {
  let rendered = await makeRoute(pathname);

  if (rendered === null) return;

  const parser = new DOMParser();

  const doc = parser.parseFromString(rendered, "text/html");

  const errorNode = doc.querySelector("parsererror");
  if (errorNode) {
    console.error(doc, rendered, "error while parsing");
    return;
  }

  const apps = await Promise.all(
    Array.from(doc.querySelectorAll("[data-app]")).map(async (el) => {
      const appName = el.getAttribute("data-app");

      let response: Response;

      switch (appName) {
        case "header":
          response = await fetch("http://localhost:8004/");
          break;
        case "home":
          response = await fetch("http://localhost:8003/");
          break;
        default:
          console.error(appName);
          return;
      }

      if (!response.ok) {
        console.error(response.statusText);
        return;
      }

      const html = await response.text();

      const parser = new DOMParser();

      const doc = parser.parseFromString(html, "text/html");

      const errorNode = doc.querySelector("parsererror");
      if (errorNode) {
        console.error(doc, rendered, "error while parsing");
        return;
      }

      const appHTML = doc.getElementById(`${appName}-body`);
      const head = doc.getElementsByTagName(`head`)[0];
      const headArray = [];

      let insert = false;
      for (let i = 0; i < head.childNodes.length; i++) {
        const el = head.childNodes[i];
        if (insert) {
          if (el.nodeName === "SCRIPT") {
            const script = document.createElement("script");

            // @ts-ignore
            script.src = el.attributes.src.nodeValue;
            // При необходимости можно указать тип модуля:
            script.type = "module";

            script.setAttribute("data-app", appName);

            // Если нужно отследить, когда скрипт загрузился, вешаем обработчик onload:
            script.onload = () => {
              console.log("worked");
            };

            headArray.push(script);

            continue;
          }
          headArray.push(el);
        }
        if (el.nodeType === 8 && el.textContent === "inserted-content-start") {
          insert = true;
        }
      }

      return { appHTML, headArray, appName };
    }),
  );

  apps.forEach((app) => {
    if (!app) return;
    const { appHTML, appName } = app;

    rendered =
      rendered?.replace(
        `<div data-app="${appName}"></div>`,
        appHTML?.outerHTML ?? "",
      ) ?? "";
  });

  const app = document.getElementById("sharebook-body")!;
  app.innerHTML = rendered;

  const head = document.getElementsByTagName("head")[0];
  apps.forEach((app) => {
    if (!app) return;

    const { headArray } = app;

    headArray.forEach((el) => {
      head.appendChild(el);
    });
  });
}

let currentTemplateType = "initialize-me";

export async function makeRoute(pathname: string) {
  const routeConfig = await router.resolve({ pathname });

  if (!routeConfig?.templateType) {
    throw new Error("No template type specified");
  }

  if (routeConfig.templateType === currentTemplateType) return null;

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

  return template.default;
}

async function navigateTo(pathname: string) {
  // Меняем URL в адресной строке без перезагрузки страницы
  window.history.pushState({}, "", pathname);
  // Рендерим соответствующий контент
  await renderRoute(pathname);
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
    await renderRoute(window.location.pathname);
  });

  // 5. При первой загрузке страницы рендерим контент
  //    на основе текущего location.pathname
  window.addEventListener("DOMContentLoaded", async () => {
    await renderRoute(window.location.pathname);
  });
}
