import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sharebookApi } from "./services/api/sharebookApi.ts";
import { authReducer } from "./services/auth/authSlice.tsx";

const rootReducer = combineReducers({
  [sharebookApi.reducerPath]: sharebookApi.reducer,
  auth: authReducer,
});

export function setupStore(preloadedState?: AppState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sharebookApi.middleware),
  });
}

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
