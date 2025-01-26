import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

hydrateRoot(document.getElementById("header-body") as HTMLElement, <App />);
