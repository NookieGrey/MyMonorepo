import {BrowserRouter, Route, Routes} from "react-router";
import {Home} from "./pages/home/Home.tsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}
