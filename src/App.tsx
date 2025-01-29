import {StrictMode} from 'react';
import {App as AntDApp, ConfigProvider} from "antd";
import {antdThemeConfig} from "./antdConfig.ts";
import {AppRouter} from "./AppRouter.tsx";

export function App() {
  return (
    <StrictMode>
      <ConfigProvider theme={antdThemeConfig}>
        <AntDApp>
          <AppRouter/>
        </AntDApp>
      </ConfigProvider>
    </StrictMode>
  );
}