const BASE_URL = process.env.SITE_URL;


export async function getFilmes() {
  const res = await fetch(`${BASE_URL}/filmes`);
  if (!res.ok) throw new Error("Erro ao buscar filmes");
  return res.json();
}

export async function getSeries() {
  const res = await fetch(`${BASE_URL}/series`);
  if (!res.ok) throw new Error("Erro ao buscar séries");
  return res.json();
}
