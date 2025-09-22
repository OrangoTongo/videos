import pool from "../db.js";

export const getSeries = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, titulo, link FROM series ORDER BY titulo ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};
