export const getInicio = (req, res) => {
  res.json([
    { titulo: "Filmes", link: "/filmes" },
    { titulo: "Séries", link: "/series" }
  ]);
};
