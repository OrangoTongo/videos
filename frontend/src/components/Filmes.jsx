import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFilmes } from "../api";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilmes()
      .then(setFilmes)
      .catch((err) => console.error("Erro ao buscar filmes:", err));
  }, []);

  const voltarHome = () => {
    navigate("/"); // ou "/inicio"
  };

  return (
    <div className="page-container">
      <h1>Filmes</h1>
      <button onClick={voltarHome} className="botao-voltar">
        Voltar à Home
      </button>
      <ul className="lista-videos">
        {filmes.map((filme) => (
          <li key={filme.id}>
            <a href={filme.link} target="_blank" rel="noreferrer">
              {filme.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
