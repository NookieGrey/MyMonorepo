import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./services/auth/authSlice";
import { sharebookApi } from "./services/api/sharebookApi";

const rootReducer = combineReducers({
  [sharebookApi.reducerPath]: sharebookApi.reducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // Чтобы Redux не ругался на несериализуемый refreshPromise
        serializableCheck: {
          ignoredActions: [
            "auth/startRefresh",
            "auth/finishRefresh",
            "auth/clearRefreshPromise",
          ],
          ignoredPaths: ["auth.refreshPromise"],
        },
      }).concat(sharebookApi.middleware),
  });
}
