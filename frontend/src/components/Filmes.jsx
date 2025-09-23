import { useEffect, useState } from "react";
import { getFilmes } from "../api";

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
      <ul>
        {filmes.map(f => (
          <li key={f.file_code}>
            <a href={f.link} target="_blank">{f.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
