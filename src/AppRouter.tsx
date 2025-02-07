import { BrowserRouter, Route, Routes, StaticRouter } from "react-router";
import { Home } from "./pages/home/Home.tsx";
import { HeaderComponent } from "./components/Header";
import { Auth } from "./pages/auth";
import { Favourites } from "./pages/favourites/Favourites.tsx";
import { CreateBook } from "./pages/createBook";
import { Chat } from "./pages/chat/Chat.tsx";
import { Profile } from "./pages/profile";

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

export function AppRouter({ location }: { location: string }) {
  return (
    <Router location={location}>
      <HeaderComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/filter/:genre" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/createBook" element={<CreateBook />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/profile/:userId?" element={<Profile />} />
        <Route path={"*"} element={<div>404 page not found</div>} />
      </Routes>
    </Router>
  );
}
