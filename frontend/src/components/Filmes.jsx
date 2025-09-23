import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem.jsx";
import { getFilmes } from "../api.js";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilmes()
      .then(data => setFilmes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Filmes</h2>
      <div className="grid-container">
        {filmes.map(f => (
          <CardItem key={f.id} title={f.title} link={f.link} />
        ))}
      </div>
    </div>
  );
}
