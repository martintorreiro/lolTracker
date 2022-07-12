import React from "react";
import "./App.css";
import { Title } from "./components/header";
import { LolHome } from "./pages/lol-home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { TftHome } from "./pages/ftf-home";
import { ValHome } from "./pages/val-home";
import { UserProfile } from "./pages/user-profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Title></Title>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/LOL" element={<LolHome />}></Route>
          <Route path="/TFT" element={<TftHome />}></Route>
          <Route path="/VAL" element={<ValHome />}></Route>
          <Route
            path="/LOL/user-profile/:user"
            element={<UserProfile />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
