import React from "react";

export default function CardItem({ title, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Assistir
      </a>
    </div>
  );
}
