import { StrictMode } from "react";
import { App as AntDApp, ConfigProvider } from "antd";
import { antdThemeConfig } from "./antdConfig.ts";
import { AppRouter } from "./AppRouter.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store.ts";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { StyleProvider } from "@ant-design/cssinjs";
import { I18nextProvider } from "react-i18next";
import type { i18n } from "i18next";
import "./index.css";

export function App({ location, cache ,
  i18n,
}: {
  location: string;
  cache?: Entity;
  i18n: i18n;
}) {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <ReduxProvider store={store}>
          <StyleProvider cache={cache}>
            <ConfigProvider theme={antdThemeConfig}>
              <AntDApp>
                <AppRouter location={location} />
              </AntDApp>
            </ConfigProvider>
          </StyleProvider>
        </ReduxProvider>
      </I18nextProvider>
    </StrictMode>
  );
}
