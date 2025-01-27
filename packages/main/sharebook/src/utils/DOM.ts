export async function makeDocument(html: string) {
  if (import.meta.env.SSR) {
    const { JSDOM } = await import("jsdom");
    const dom = new JSDOM(html);

    return dom.window.document;
  }

  const parser = new DOMParser();

  const doc = parser.parseFromString(html, "text/html");

  const errorNode = doc.querySelector("parsererror");
  if (errorNode) {
    console.error({ doc, html }, "error while parsing");
    return null;
  }

  return doc;
}

export function makeScript(el: Node, appName: string, callback: () => void) {
  const script = document.createElement("script");

  // @ts-ignore
  script.src = el.attributes.src.nodeValue;
  // При необходимости можно указать тип модуля:
  script.type = "module";

  script.onload = callback;

  script.setAttribute("data-script", appName);

  return script;
}
