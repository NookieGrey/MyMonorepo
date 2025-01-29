import {hydrateRoot} from "react-dom/client";
import {App} from "./App.tsx";

hydrateRoot(
  document.getElementById("sharebook") as HTMLElement,
  <App location={location.href}/>,
)
