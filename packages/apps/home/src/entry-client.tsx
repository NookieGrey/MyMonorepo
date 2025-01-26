import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

hydrateRoot(
  document.getElementById("home-body") as HTMLElement,
  <App url={location.href} />,
);
