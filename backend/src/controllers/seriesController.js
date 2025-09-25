import pool from "../db.js";

// Pega todas as séries únicas
export const getSeriesList = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT DISTINCT fld_id, name FROM series ORDER BY name ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

// Pega os episódios de uma série pelo fld_id
export const getEpisodesByFolder = async (req, res) => {
  try {
    const { fld_id } = req.params;
    const result = await pool.query(
      "SELECT id, title, link FROM series WHERE fld_id = $1 ORDER BY title ASC",
      [fld_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar episódios" });
  }
};
