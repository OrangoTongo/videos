import { useState, useEffect } from "react";
import { getSeries } from "../api"; // sua função que busca /api/series
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

  // Agrupa os episódios pelo fld_id (cada "série")
  const groupedSeries = series.reduce((acc, ep) => {
    if (!acc[ep.fld_id]) acc[ep.fld_id] = [];
    acc[ep.fld_id].push(ep);
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

      {Object.entries(groupedSeries).map(([fld_id, episodes]) => (
        <div
          key={fld_id}
          className="series-card"
        >
          <h2 onClick={() => toggleFolder(fld_id)}>
            Série {fld_id} ({episodes.length} episódios)
          </h2>

          {expandedFolders[fld_id] && (
            <div className="episodes-list">
              {episodes.map((ep) => (
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
