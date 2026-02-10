import express from "express";
import conectarAoBanco from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectarAoBanco();

conexao.on('erro', (err) => {
    console.error('Erro ao conectar ao banco de dados', err);
    
})

conexao.once('open', () => {
    console.log('Conectado ao banco de dados')
})

const app = express();
routes(app); 

app.use(manipulador404);

//middleWare do express
app.use(manipuladorDeErros);

export default app;

