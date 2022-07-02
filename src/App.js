import React from "react";
import "./App.css";
import { Title } from "./components/header";
import { SearchSummoner } from "./pages/searchSummoner/searchSummoner";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Title className="header" title="Riot Tracker" />
      <BrowserRouter>
        <div>
          <header className="navigation_menu">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/LOL">League of legends</Link>
              <Link to="/TFT">TFT</Link>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home className="contenido" />}></Route>
            <Route
              path="/LOL"
              element={<SearchSummoner className="contenido" />}
            ></Route>
            <Route
              path="/TFT"
              element={<SearchSummoner className="contenido" />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
