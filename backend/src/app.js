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


app.use(express.json());
app.use(cors());


app.use("//inicio", indexRouter);
app.use("/series", seriesRouter);
app.use("/filmes", filmesRouter);


app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
