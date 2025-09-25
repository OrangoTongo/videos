import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.DATABASE_URL;

export default function Series() {
  const [seriesList, setSeriesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/api/series`)
      .then((res) => res.json())
      .then(setSeriesList)
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1>Séries</h1>
      <div className="button-container">
        <button onClick={() => navigate("/")} className="botao-voltar">
          Voltar à Home
        </button>
      </div>

      <ul className="lista-videos">
        {seriesList.map((serie) => (
          <li key={serie.fld_id}>
            <a
              onClick={() => navigate(`/series/${serie.fld_id}`)}
              className="link-serie"
            >
              {serie.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
