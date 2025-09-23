import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonNav() {
  const navigate = useNavigate();

  return (
    <div className="button-container">
      <button className="botao-voltar" onClick={() => navigate("/filmes")}>
        Filmes
      </button>
      <button className="botao-voltar" onClick={() => navigate("/series")}>
        Séries
      </button>
    </div>
  );
}
