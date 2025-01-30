import {StrictMode} from 'react';
import {App as AntDApp, ConfigProvider} from "antd";
import {antdThemeConfig} from "./antdConfig.ts";
import {AppRouter} from "./AppRouter.tsx";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "./store.ts";
import type Entity from "@ant-design/cssinjs/es/Cache";
import {StyleProvider} from "@ant-design/cssinjs";

export function App({location, cache}: { location: string, cache?: Entity }) {
  return (
    <StrictMode>
      <ReduxProvider store={store}>
        <StyleProvider cache={cache}>
          <ConfigProvider theme={antdThemeConfig}>
            <AntDApp>
              <AppRouter location={location}/>
            </AntDApp>
          </ConfigProvider>
        </StyleProvider>
      </ReduxProvider>
    </StrictMode>
  );
}