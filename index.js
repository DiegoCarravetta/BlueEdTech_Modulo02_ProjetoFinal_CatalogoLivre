const express = require (`express`);
const path = require (`path`);

const app = express ();
const port = process.env.Port || 3000;

app.set (`view engine`, `ejs`);
app.use (express.static (path.join (__dirname, `public`)));

app.get (`/`, (req, res) => {
    res.render (`index`);
});

app.get (`/catalogar`, (req, res) => {
    res.render (`catalogar`);
});

app.get (`/informacoes`, (req, res) => {
    res.render (`informacoes`)
});

app.get (`/criacao`, (req, res) => {
    res.render (`criacao`)
});

app.get (`/adicionar`, (req, res) => {
    res.render (`adicionar`)
});

app.listen (port, () => console.log (`Servidor rodando em http://localhost:${port}`));