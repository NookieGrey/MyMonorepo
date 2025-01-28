import { renderToString } from "react-dom/server";
import { App } from "./App";
import { createCache, extractStyle } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";

export function render(location: string) {
  const cache: Entity = createCache();

  const html = renderToString(<App cache={cache} location={location} />);

  const styleText = extractStyle(cache);

  return { html, styleText };
}
