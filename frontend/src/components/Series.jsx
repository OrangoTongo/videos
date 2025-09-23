import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://videos-m0k8.onrender.com/api";

export default function Series() {
  const [seriesList, setSeriesList] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [episodes, setEpisodes] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/series`)
      .then((res) => res.json())
      .then(async (series) => {
        setSeriesList(series);

        // 🔹 já busca episódios de cada série
        const episodesData = {};
        for (const serie of series) {
          const res = await fetch(`${BASE_URL}/series/${serie.fld_id}/episodes`);
          const data = await res.json();
          episodesData[serie.fld_id] = data;
        }
        setEpisodes(episodesData);
      })
      .catch(console.error);
  }, []);

  const toggleSeries = (fld_id) => {
    setExpanded((prev) => ({ ...prev, [fld_id]: !prev[fld_id] }));
  };

  return (
    <div className="container">
      <h1>Séries</h1>
      <div className="button-container">
        <button onClick={() => navigate("/")} className="botao-voltar">
          Voltar à Home
        </button>
      </div>

      <div className="series-list">
        {seriesList.map((serie) => (
          <div key={serie.fld_id} className="series-card">
            <h2 onClick={() => toggleSeries(serie.fld_id)}>
              {serie.name}
            </h2>

            {expanded[serie.fld_id] && (
              <div className="episodes-wrapper">
                <div className="episodes-list">
                  {episodes[serie.fld_id]?.map((ep) => (
                    <div key={ep.id} className="episode-item">
                      {ep.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
