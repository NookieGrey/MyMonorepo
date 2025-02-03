import { renderToString } from "react-dom/server";
import { App } from "./App";
import { createCache, extractStyle } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";
import type { i18n } from "i18next";
import { setupStore } from "./store.ts";
import { sharebookApi } from "./services/api/sharebookApi.ts";

export async function render(location: string, i18n: i18n) {
  const cache: Entity = createCache();

  const store = setupStore();

  const element = (
    <App cache={cache} location={location} i18n={i18n} store={store} />
  );

  renderToString(element);

  await Promise.all(store.dispatch(sharebookApi.util.getRunningQueriesThunk()));

  const body = renderToString(element);

  const head = extractStyle(cache);

  const state = store.getState();

  return { body, head, state };
}
