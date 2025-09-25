import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL = process.env.DATABASE_URL;

export default function SerieDetalhes() {
  const { fld_id } = useParams();
  const [serieName, setSerieName] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
fetch(`${BASE_URL}/api/series/${fld_id}/episodes`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setSerieName(data[0].name); // pega o nome da série do primeiro episódio
          setEpisodes(data);
        }
      })
      .catch(console.error);
  }, [fld_id]);

  return (
    <div className="container">
      <h1>{serieName}</h1>
      <div className="button-container">
        <button onClick={() => navigate("/series")} className="botao-voltar">
          Voltar às Séries
        </button>
      </div>

      <ul className="lista-videos">
        {episodes.map((ep, index) => (
          <li key={ep.id}>
            <a href={ep.link} target="_blank" rel="noreferrer">
              Episódio {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
