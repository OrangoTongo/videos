import React, { useState, useEffect } from "react";
import { getSeries } from "../api"; // sua função que busca os dados da API


const Series = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [openSeries, setOpenSeries] = useState(null); // qual série está aberta

  useEffect(() => {
    async function fetchSeries() {
      try {
        const data = await getSeries();
        setSeriesData(data);
      } catch (err) {
        console.error("Erro ao buscar séries:", err);
      }
    }
    fetchSeries();
  }, []);

  // Agrupa episódios por série
  const seriesGrouped = seriesData.reduce((acc, ep) => {
    if (!acc[ep.title]) acc[ep.title] = [];
    acc[ep.title].push(ep);
    return acc;
  }, {});

  const handleToggleSeries = (title) => {
    setOpenSeries(openSeries === title ? null : title);
  };

  return (
    <div className="container">
      <h1>Séries</h1>

      <div className="voltar-container">
        <button onClick={() => (window.location.href = "/")}>Voltar à Home</button>
      </div>

      <div className="series-list">
        {Object.keys(seriesGrouped).map((title) => (
          <div key={title} className="series-card">
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => handleToggleSeries(title)}
            >
              {title}
            </h2>

            {openSeries === title && (
              <div className="episodes-grid">
                {seriesGrouped[title].map((ep) => (
                  <div key={ep.id} className="card">
                    <h3>Episódio {ep.id}</h3>
                    <a href={ep.link} target="_blank" rel="noopener noreferrer">
                      Assistir
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
