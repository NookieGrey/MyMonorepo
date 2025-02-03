import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";
import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { setupStore } from "./store.ts";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init(
    {
      lng: window.initialLanguage,
      fallbackLng: "en",
      debug: false,
      resources: window.initialI18nStore,
      react: {
        useSuspense: false,
      },
    },
    () => {
      const preloadedState = window.__PRELOADED_STATE__ || {};
      const store = setupStore(preloadedState);

      hydrateRoot(
        document.getElementById("sharebook") as HTMLElement,
        <App location={location.href} i18n={i18next} store={store} />,
      );
    },
  );
