import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

export const init = (location: string) => {
  const root = hydrateRoot(
    document.getElementById("chat-body") as HTMLElement,
    <App location={location} />,
  );

  return () => root.unmount();
};

if (window.definedApps) {
  window.definedApps.chat = { appName: "chat", init, initialized: false };
} else {
  console.error("window.definedApps is not defined at [chat].");
}

if (location.port === "8006") {
  init(location.href);
}
