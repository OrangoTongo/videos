import { useState } from "react";
import Home from "./components/Home";
import Filmes from "./components/Filmes";
import Series from "./components/Series";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "filmes") return <Filmes />;
    if (page === "series") return <Series />;
    return <Home goToPage={setPage} />;
  };

  return (
    <div>
      <h1>Meu Catálogo</h1>
      {renderPage()}
    </div>
  );
}
