import { useState, useEffect } from "react";
import { getSeries } from "../api";
import { useNavigate } from "react-router-dom";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [expandedFolders, setExpandedFolders] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSeries() {
      try {
        const data = await getSeries();
        setSeries(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchSeries();
  }, []);

  // Agrupa os episódios pelo fld_id (cada "série") e pega o nome da série
  const groupedSeries = series.reduce((acc, ep) => {
    if (!acc[ep.fld_id]) acc[ep.fld_id] = { name: ep.name, episodes: [] };
    acc[ep.fld_id].episodes.push(ep);
    return acc;
  }, {});

  const toggleFolder = (fld_id) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [fld_id]: !prev[fld_id],
    }));
  };

  return (
    <div className="container">
      <div className="voltar-container">
        <button onClick={() => navigate("/")}>Voltar à Home</button>
      </div>

      {Object.entries(groupedSeries).map(([fld_id, seriesData]) => (
        <div key={fld_id} className="series-card">
          <h2 onClick={() => toggleFolder(fld_id)}>
            {seriesData.name} ({seriesData.episodes.length} episódios)
          </h2>

          {expandedFolders[fld_id] && (
            <div className="episodes-list">
              {seriesData.episodes.map((ep) => (
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
