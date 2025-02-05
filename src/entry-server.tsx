import { renderToString } from "react-dom/server";
import { App } from "./App";
import { createCache, extractStyle } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";
import type { i18n } from "i18next";
import { setupStore } from "./store.ts";
import { sharebookApi } from "./services/api/sharebookApi.ts";
import {
  setAccessToken,
  setRefreshCookie,
  setReturnCookie,
} from "./services/auth/authSlice.tsx";

export async function render(
  location: string,
  i18n: i18n,
  cookie: Record<string, string>,
) {
  const cache: Entity = createCache();

  const store = setupStore();

  const cookieString = Object.entries(cookie)
    .map(([key, value]) => `${key}=${value}`)
    .join(";");

  store.dispatch(setRefreshCookie(cookieString));

  const element = (
    <App cache={cache} location={location} i18n={i18n} store={store} />
  );

  renderToString(element);

  await Promise.all(store.dispatch(sharebookApi.util.getRunningQueriesThunk()));

  const returnCookie = store.getState().auth?.returnCookie;

  store.dispatch(setRefreshCookie(null));
  store.dispatch(setReturnCookie(null));
  store.dispatch(setAccessToken(null));

  const body = renderToString(element);

  const head = extractStyle(cache);

  const state = store.getState();

  return { body, head, state, returnCookie };
}
