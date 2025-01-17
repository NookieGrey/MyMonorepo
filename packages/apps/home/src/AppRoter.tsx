import {BrowserRouter, Route, Routes} from "react-router";
import {Home} from "./pages/home/Home";

export function AppRoter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}
