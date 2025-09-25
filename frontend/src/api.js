// API base URL: mesmo domínio
const BASE_URL = "";

// Buscar séries
export async function getSeries() {
  const res = await fetch(`${BASE_URL}/api/series`);
  if (!res.ok) throw new Error("Erro ao buscar séries");
  return res.json();
}

// Buscar filmes
export async function getFilmes() {
  const res = await fetch(`${BASE_URL}/api/filmes`);
  if (!res.ok) throw new Error("Erro ao buscar filmes");
  return res.json();
}
