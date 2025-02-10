import { BrowserRouter, Route, Routes, StaticRouter } from "react-router";
import { Home } from "./pages/home/Home.tsx";
import { HeaderComponent } from "./components/Header";
import { Favourites } from "./pages/favourites/Favourites.tsx";
import { CreateBook } from "./pages/createBook";
import { BookPage } from "./pages/book/index.tsx";
import { Chat } from "./pages/chat/Chat.tsx";
import { Profile } from "./pages/profile";
import {
  useFindAllGenreQuery,
  useGetProfileQuery,
} from "./services/api/sharebookApi.ts";
import { useTranslation } from "react-i18next";
import { Genre } from "./pages/genre";
import { Auth } from "./pages/auth";
import { Search } from "./pages/search";

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

export function AppRouter({ location }: { location: string }) {
  const { i18n } = useTranslation();

  useFindAllGenreQuery({ locale: i18n.language.split("-")[0] });
  useGetProfileQuery({
    userId: "-1",
    zone: new Date().getTimezoneOffset() / -60,
  });

  return (
    <Router location={location}>
      <HeaderComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/genre/:genreId" element={<Genre />} />
        <Route path="/search/:title?" element={<Search />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/createBook" element={<CreateBook />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/profile/:userId?" element={<Profile />} />
        <Route path={"*"} element={<div>404 page not found</div>} />
      </Routes>
      <Auth />
    </Router>
  );
}
