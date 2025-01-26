import { StrictMode } from "react";
import { App as AntDApp, ConfigProvider } from "antd";
import { antdThemeConfig } from "./antdConfig.ts";
import "antd/dist/reset.css";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { StyleProvider } from "@ant-design/cssinjs";
import { AppRouter } from "./AppRouter.tsx";

export function App({ cache, url }: { cache?: Entity; url: string }) {
  return (
    <StrictMode>
      <StyleProvider cache={cache}>
        <ConfigProvider theme={antdThemeConfig}>
          <AntDApp>
            <AppRouter url={url} />
          </AntDApp>
        </ConfigProvider>
      </StyleProvider>
    </StrictMode>
  );
}
