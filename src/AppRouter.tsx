import { BrowserRouter, Route, Routes, StaticRouter } from "react-router";
import { Home } from "./pages/home/Home.tsx";
import { HeaderComponent } from "./components/Header";
import { Auth } from "./pages/auth";

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

export function AppRouter({ location }: { location: string }) {
  return (
    <Router location={location}>
      <HeaderComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/filter/:genre" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path={"*"} element={<div>404 page not found</div>} />
      </Routes>
    </Router>
  );
}
