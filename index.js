const express = require (`express`);
const path = require (`path`);

require (`dotenv`).config ()

const app = express ();
const port = process.env.PORT;

app.use (express.urlencoded({ extended: true }));

app.set (`view engine`, `ejs`);
app.use (express.static (path.join (__dirname, `public`)));

const carros = [
    {
        "id": 1,
        "marca": "Audi",
        "nome": "R8",
        "modelo": "Sport",
        "ano": 2021,
        "valor": 750,
        "imagem": "/img/car-card.png"
    }
]

app.get (`/`, (req, res) => {
    res.render (`index`, {
        carros,
    });
});

app.get (`/catalogar`, (req, res) => {
    res.render (`catalogar`);
});

app.get (`/informar`, (req, res) => {
    res.render (`informar`)
});

app.get (`/criar`, (req, res) => {
    res.render (`criar`)
});

app.get (`/editar`, (req, res) => {
    res.render (`editar`)
});

app.listen (port, () => console.log (`Servidor rodando em http://localhost:${port}`));