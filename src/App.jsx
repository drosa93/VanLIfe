import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css'
import Home from "./pages/home";
import About from "./pages/about";
import Vans from "./pages/vans";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" ><h1>#VanLife</h1></Link>
        <nav className="homeAbout">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}