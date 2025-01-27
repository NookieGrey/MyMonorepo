import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

export const init = () => {
  const root = hydrateRoot(
    document.getElementById("header-body") as HTMLElement,
    <App />,
  );

  console.log("header initialized");

  return () => {
    console.log("header unmounted");

    root.unmount();
  };
};

if (window.definedApps) {
  window.definedApps.header = { appName: "header", init, initialized: false };
} else {
  console.error("window.definedApps is not defined at [header].");
}

if (location.port === "8004") {
  init();
}
