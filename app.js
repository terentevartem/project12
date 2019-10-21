const express = require('express');
const { PORT = 3000 } = process.env;
const path = require('path');
const routerCards = require('./routes/cards');
const routerUsers = require('./routes/users');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '5dab52c6856d039c9475a7f6',
  };

  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/', routerCards);
app.use('/', routerUsers);
app.use(express.static(path.join(__dirname, 'public')))
app.use('*', function(req, res) {
  res.send({ message: "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})