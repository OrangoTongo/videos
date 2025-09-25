import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Filmes from "./components/Filmes.jsx";
import Series from "./components/Series.jsx";
import SerieDetalhes from "./components/SerieDetalhes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/:fld_id" element={<SerieDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}
