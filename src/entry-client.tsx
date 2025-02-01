import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

// client.js
import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init(
    {
      lng: window.initialLanguage, // устанавливаем язык, определённый сервером
      fallbackLng: "en",
      debug: false,
      resources: window.initialI18nStore, // используем предзагруженные переводы
      react: {
        useSuspense: false,
      },
    },
    () => {
      hydrateRoot(
        document.getElementById("sharebook") as HTMLElement,
        <App location={location.href} i18n={i18next} />,
      );
    },
  );
