import { renderToString } from "react-dom/server";
import { App } from "./App";
import { createCache, extractStyle } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";
import type { i18n } from "i18next";

export function render(location: string, i18n: i18n) {
  const cache: Entity = createCache();

  const body = renderToString(<App cache={cache} location={location} i18n={i18n} />,
  );

  const head = extractStyle(cache);

  return { body, head };
}
