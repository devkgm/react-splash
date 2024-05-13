import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@pages/index";
import BookMarkPage from "@pages/bookmark"
import { RecoilRoot } from "recoil";
function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<MainPage />}></Route>
                    <Route path='/:id' element={<MainPage />}></Route>
                    <Route path='/bookmark' element={<BookMarkPage />}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
