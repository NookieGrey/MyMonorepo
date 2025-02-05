// global.d.ts
export {};

declare global {
  interface Window {
    /**
     * Язык, определённый на сервере и переданный в клиент.
     */
    initialLanguage: string;

    /**
     * Предзагруженные переводы (i18n store) для разных языков.
     * Ключ — код языка (например, 'en', 'ru'),
     * значение — объект с названиями namespace и строками переводов.
     */
    initialI18nStore: {
      [lng: string]: {
        [namespace: string]: any;
      };
    };
    __PRELOADED_STATE__?: any;
  }
}
