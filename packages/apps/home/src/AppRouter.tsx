import { BrowserRouter, Route, Routes, StaticRouter } from "react-router";
import { Home } from "./pages/home/Home";

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

export function AppRouter({ location }: { location: string }) {
  return (
    <Router location={location}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/filter/:genre" element={<Home />} />
      </Routes>
    </Router>
  );
}
