import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

// Routers da API
import indexRouter from "./routes/indexRouter.js";
import seriesRouter from "./routes/seriesRouter.js";
import filmesRouter from "./routes/filmesRouter.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// Prefixo /api para a API
app.use("/api/inicio", indexRouter);
app.use("/api/series", seriesRouter);
app.use("/api/filmes", filmesRouter);

// Servir frontend React
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
