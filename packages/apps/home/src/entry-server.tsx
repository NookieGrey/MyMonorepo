import { renderToString } from "react-dom/server";
import { App } from "./App";
import { createCache, extractStyle } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";

export function render(url: string) {
  const cache: Entity = createCache();

  const html = renderToString(<App cache={cache} url={url} />);

  const styleText = extractStyle(cache);

  return { html, styleText };
}
