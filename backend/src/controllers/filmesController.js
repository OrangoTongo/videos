import pool from "../db.js";

export const getFilmes = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, titulo, link FROM filmes"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};
