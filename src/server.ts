//arquivo principal para a utilização de rotas vindas de outros arquivos 
import express from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';

dotenv.config();

const app = express();

//definição de qual template engine será utilizada
app.set('view engine', 'mustache');

//localização dos arquivos .html do projeto
app.set('views', path.join(__dirname, 'views'));

//usar a template engine
app.engine('mustache', mustache());


//express - pega essa pasta public e torna ela estática
app.use(express.static(path.join(__dirname, '../public')));


app.use(mainRoutes);


app.use((request, response)=>{
    response.render('pages/404');
});

app.listen(process.env.PORT);