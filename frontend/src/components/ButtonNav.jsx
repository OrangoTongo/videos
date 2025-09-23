import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonNav() {
  const navigate = useNavigate();

  return (
    <div className="button-nav">
      <button onClick={() => navigate("/filmes")}>Filmes</button>
      <button onClick={() => navigate("/series")}>Séries</button>
    </div>
  );
}
