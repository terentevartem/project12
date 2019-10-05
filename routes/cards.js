const routerCards = require('express').Router();
const cards = require('../data/cards.json');

routerCards.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = routerCards;
