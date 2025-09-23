import { useEffect, useState } from "react";
import { getSeries } from "../api";

export default function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeries()
      .then(data => {
        data.sort((a, b) => a.title.localeCompare(b.title)); 
        setSeries(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Séries</h2>
      <ul>
        {series.map(s => (
          <li key={s.file_code}>
            <a href={s.link} target="_blank">{s.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
