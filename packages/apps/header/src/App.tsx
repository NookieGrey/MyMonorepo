import { StrictMode } from "react";
import { App as AntDApp, ConfigProvider } from "antd";
import { antdThemeConfig } from "./antdConfig.ts";
import "antd/dist/reset.css";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { StyleProvider } from "@ant-design/cssinjs";
import { AppRouter } from "./AppRouter.tsx";

export function App({ cache, location }: { cache?: Entity; location: string }) {
  console.log(location);

  return (
    <StrictMode>
      <StyleProvider cache={cache}>
        <ConfigProvider theme={antdThemeConfig}>
          <AntDApp>
            <AppRouter location={location} />
          </AntDApp>
        </ConfigProvider>
      </StyleProvider>
    </StrictMode>
  );
}
