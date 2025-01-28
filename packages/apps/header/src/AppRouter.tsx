import { BrowserRouter, StaticRouter } from "react-router";
import { HeaderComponent } from "./Header";

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

export function AppRouter({ location }: { location: string }) {
  return (
    <Router location={location}>
      <HeaderComponent />
    </Router>
  );
}
