import { BrowserRouter, Route, Routes, StaticRouter } from "react-router";
import { Home } from "./pages/home/Home";

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

export function AppRouter({ url }: { url: string }) {
  return (
    <Router location={url}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/filter/:genre" element={<Home />} />
      </Routes>
    </Router>
  );
}
