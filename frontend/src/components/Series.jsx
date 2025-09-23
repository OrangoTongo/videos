import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem.jsx";
import { getSeries } from "../api.js";

export default function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeries()
      .then(data => setSeries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Séries</h2>
      <div className="grid-container">
        {series.map(s => (
          <CardItem key={s.id} title={s.title} link={s.link} />
        ))}
      </div>
    </div>
  );
}
