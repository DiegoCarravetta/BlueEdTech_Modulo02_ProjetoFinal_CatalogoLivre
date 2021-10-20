const express = require (`express`);
const path = require (`path`);

require (`dotenv`).config ()

const app = express ();
const port = process.env.PORT;

app.use (express.urlencoded({ extended: true }));

app.set (`view engine`, `ejs`);
app.use (express.static (path.join (__dirname, `public`)));

app.get (`/`, (req, res) => {
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
    ];

    setTimeout ( () => {
        message = ``;
    }, 1000);

    res.render (`index`, {
        lista: carros, message,
    });
});

app.post (`/novo`, (req, res) => {
    message = `Parabéns, seu carro foi cadastrado com sucesso`;
    res.redirect (`/`);
});

app.get (`/catalogar`, (req, res) => {
    res.render (`catalogar`);
});

app.get (`/informar`, (req, res) => {
    setTimeout ( () => {
        message = ``;
    }, 1000);

    res.render (`informar`, {
        message,
    });
});

app.get (`/criar`, (req, res) => {
    setTimeout ( () => {
        message = ``;
    }, 1000);

    res.render (`criar`, {
        message,
    });
});

app.get (`/editar`, (req, res) => {
    res.render (`editar`)
});

app.post("/novo", (req, res) => {
    const {
        id,
        marca,
        nome,
        modelo,
        ano,
        valor,
        imagem,
    } = req.body;

    const novoCarros = {
        Id: id,
        Marca: marca,
        Nome: nome,
        Modelo: modelo,
        Ano: ano,
        Valor: valor,
        Imagem: imagem,
    };

    carros.push(novoCarros);
    res.redirect("/");
  });

app.listen (port, () => console.log (`Servidor rodando em http://localhost:${port}`));