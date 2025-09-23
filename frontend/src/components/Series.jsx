import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSeries } from "../api";

export default function Series() {
  const [series, setSeries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSeries()
      .then(setSeries)
      .catch((err) => console.error("Erro ao buscar séries:", err));
  }, []);

  const voltarHome = () => {
    navigate("/"); // ou "/inicio"
  };

  return (
    <div className="page-container">
      <h1>Séries</h1>
      <button onClick={voltarHome} className="botao-voltar">
        Voltar à Home
      </button>
      <ul className="lista-videos">
        {series.map((serie) => (
          <li key={serie.id}>
            <a href={serie.link} target="_blank" rel="noreferrer">
              {serie.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
