import { HeaderComponent } from "./Header";
import { StrictMode } from "react";
import { App as AntDApp, ConfigProvider } from "antd";
import { antdThemeConfig } from "./antdConfig.ts";
import "antd/dist/reset.css";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { StyleProvider } from "@ant-design/cssinjs";

export function App({ cache }: { cache?: Entity }) {
  return (
    <StrictMode>
      <StyleProvider cache={cache}>
        <ConfigProvider theme={antdThemeConfig}>
          <AntDApp>
            <HeaderComponent />
          </AntDApp>
        </ConfigProvider>
      </StyleProvider>
    </StrictMode>
  );
}
