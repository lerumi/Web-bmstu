const express = require('express');

const stocks = require('./internal/stocks');
const dogs = require('./internal/dogs');

const app = express();

const host = 'localhost';
const port = 8000;

app.use(express.json());

app.use('/stocks', stocks);
app.use('/dogs', dogs);


app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}`);
});