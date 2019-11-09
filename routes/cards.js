const routerCards = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getCards, createCard, deleteCard } = require('../controllers/cards');

routerCards.get('/', getCards);
routerCards.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().uri(),
    owner: Joi.string().alphanum().length(24),
    likes: Joi.string().alphanum().length(24),
  }),
}), createCard);
routerCards.delete('/:id', deleteCard);

module.exports = routerCards;
