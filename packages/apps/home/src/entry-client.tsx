import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

export const init = (location: string) => {
  const root = hydrateRoot(
    document.getElementById("home-body") as HTMLElement,
    <App location={location} />,
  );

  return () => root.unmount();
};

if (window.definedApps) {
  window.definedApps.home = { appName: "home", init, initialized: false };
} else {
  console.error("window.definedApps is not defined at [home].");
}

if (location.port === "8003") {
  init(location.href);
}
