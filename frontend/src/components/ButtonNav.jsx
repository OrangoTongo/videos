import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonNav() {
  const navigate = useNavigate();

  return (
    <div className="button-nav-container">
      <button className="botao-voltar nav-btn" onClick={() => navigate("/filmes")}>
        Filmes
      </button>
      <button className="botao-voltar nav-btn" onClick={() => navigate("/series")}>
        Séries
      </button>
    </div>
  );
}
