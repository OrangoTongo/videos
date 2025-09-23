import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://videos-m0k8.onrender.com/api"; // seu backend no Render

export default function Series() {
  const [seriesList, setSeriesList] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [episodes, setEpisodes] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/series`)
      .then((res) => res.json())
      .then(setSeriesList)
      .catch(console.error);
  }, []);

  const toggleSeries = async (fld_id) => {
    if (!expanded[fld_id]) {
      // busca episódios da série
      const res = await fetch(`${BASE_URL}/series/${fld_id}/episodes`);
      const data = await res.json();
      setEpisodes((prev) => ({ ...prev, [fld_id]: data }));
    }
    setExpanded((prev) => ({ ...prev, [fld_id]: !prev[fld_id] }));
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => navigate("/")} className="botao-voltar">
          Voltar à Home
        </button>
      </div>

      {seriesList.map((serie) => (
        <div key={serie.fld_id} className="series-card">
          <h2 onClick={() => toggleSeries(serie.fld_id)}>
            {serie.name} ({episodes[serie.fld_id]?.length || 0} episódios)
          </h2>
          {expanded[serie.fld_id] && (
            <div className="episodes-list">
              {episodes[serie.fld_id]?.map((ep) => (
                <div key={ep.id} className="episode-item">
                  {ep.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
