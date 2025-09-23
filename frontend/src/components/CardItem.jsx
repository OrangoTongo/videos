import React from "react";

export default function CardItem({ title, link }) {
  return (
    <div className="series-card"> {/* usa o estilo dos cards de séries */}
      <h3 style={{ color: "#bb86fc" }}>{title}</h3> {/* título colorido */}
      <a
        className="lista-videos-link"  // ou criar uma classe específica se quiser
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Assistir
      </a>
    </div>
  );
}
