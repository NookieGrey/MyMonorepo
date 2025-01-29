import {StrictMode} from 'react';
import {App as AntDApp, ConfigProvider} from "antd";
import {antdThemeConfig} from "./antdConfig.ts";
import {AppRouter} from "./AppRouter.tsx";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "./store.ts";

export function App() {
  return (
    <StrictMode>
      <ReduxProvider store={store}>
        <ConfigProvider theme={antdThemeConfig}>
          <AntDApp>
            <AppRouter/>
          </AntDApp>
        </ConfigProvider>
      </ReduxProvider>
    </StrictMode>
  );
}