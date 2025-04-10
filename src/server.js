import express from "express";
import livroRoutes from "./routes/livroRoutes.js"
const app = express();
const port = 4000;
app.use(express.json());
app.use("/livros", livroRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
