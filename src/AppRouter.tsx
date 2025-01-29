import {BrowserRouter, Route, Routes} from "react-router";
import {Home} from "./pages/home/Home.tsx";
import {HeaderComponent} from "./components/Header";

export function AppRouter() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/filter/:genre" element={<Home/>}/>
        <Route path={"*"} element={<div>404 page not found</div>}/>
      </Routes>
    </BrowserRouter>
  )
}
