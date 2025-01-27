import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

export const init = () => {
  console.log(location.href);
  const root = hydrateRoot(
    document.getElementById("home-body") as HTMLElement,
    <App url={location.href} />,
  );

  return () => root.unmount();
};

if (window.definedApps) {
  window.definedApps.home = { appName: "home", init, initialized: false };
} else {
  console.error("window.definedApps is not defined at [home].");
}

if (location.port === "8003") {
  init();
}
