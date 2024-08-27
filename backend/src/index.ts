import express from "express";
import cors from "cors";
import rotasProdutos from "./routes/produtos";
import rotasLogin from "./routes/login";
import dotenv from "dotenv";
import autenticacao from "./middlewares/autenticacao";

dotenv.config();

const app = express();
const porta = process.env.PORT || 4000; // Use a variável de ambiente PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/login", rotasLogin);
app.use("/produtos", autenticacao, rotasProdutos);

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta}`);
});
