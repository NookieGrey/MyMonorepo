import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../store";

// Создаем базовый fetchBaseQuery
const baseQuery = fetchBaseQuery({
  mode: "cors",
  baseUrl: "https://194.67.125.199:8443/",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const accessToken = state.auth.token;

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
  // Настройки кук, если нужно в каждом запросе прокидывать credentials
  credentials: "include", // если нужно передавать куки, в т.ч. refresh token (HttpOnly)
  fetchFn: (...args) => {
    return fetch(...args).catch((err) => {
      console.error(err);

      throw err;
    });
  },
});

// Обёртка над baseQuery, чтобы автоматически обрабатывать 401
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Если получили 401, пытаемся рефрешнуть токен
  if (result.error && result.error.status === 401) {
    console.log("Access token is expired, try to refresh...");

    // Пытаемся обратиться к refresh endpoint
    const refreshResult = await baseQuery(
      { url: "/refresh", method: "POST" },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      // Допустим, сервер вернул новый accessToken
      const { accessToken } = refreshResult.data as { accessToken: string };

      // Сохраняем новый accessToken в Redux
      api.dispatch({ type: "auth/setAccessToken", payload: accessToken });

      // Повторяем запрос с новым токеном
      result = await baseQuery(args, api, extraOptions);
      // } else {
      // Если refresh неудачен – делаем логаут (например)
      // api.dispatch({ type: "auth/logout" });
    }
  }

  return result;
};
