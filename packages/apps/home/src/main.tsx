import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {AppRoter} from "./AppRoter.tsx";
import {App as AntDApp, ConfigProvider} from "antd";
import {antdThemeConfig} from "./antdConfig.ts";
import "antd/dist/reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ConfigProvider theme={antdThemeConfig}>
          <AntDApp>
              <AppRoter/>
          </AntDApp>
      </ConfigProvider>
  </StrictMode>
);
