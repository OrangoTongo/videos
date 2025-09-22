import express from "express";
import indexRouter from "./routes/indexRouter.js";
import seriesRouter from "./routes/seriesRouter.js";
import filmesRouter from "./routes/filmesRouter.js";

const app = express();
app.use(express.json());

// Rotas
app.use("/inicio", indexRouter);
app.use("/series", seriesRouter);
app.use("/filmes", filmesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
