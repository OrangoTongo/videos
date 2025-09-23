import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Filmes from "./components/Filmes.jsx";
import Series from "./components/Series.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}
