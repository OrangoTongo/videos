export default function Home({ goToPage }) {
  return (
    <div>
      <button onClick={() => goToPage("filmes")}>Filmes</button>
      <button onClick={() => goToPage("series")}>Séries</button>
    </div>
  );
}
