const express = require('express');
const { PORT = 3000 } = process.env;
const path = require('path');
const routerCards = require('./routes/cards');
const routerUsers = require('./routes/users');
const app = express();

app.use('/', routerCards);
app.use('/', routerUsers);
app.use(express.static(path.join(__dirname, 'public')))
app.use('*', function(req, res) {
  res.send({ message: "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})