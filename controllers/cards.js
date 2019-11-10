const Card = require('../models/card');
const BadRequestError = require('../errors/bad-request-err');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => {
      throw new BadRequestError('Неверный запрос');
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({
    name,
    link,
    owner: req.user._id,
    likes: req.user._id,
  })
    .then((card) => res.send({ data: card }))
    .catch(() => {
      throw new BadRequestError('Неверный запрос');
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    // eslint-disable-next-line consistent-return
    .then((card) => {
      if (!card) return Promise.reject(new Error('Такой карточки не существует'));
      if (JSON.stringify(card.owner) !== JSON.stringify(req.user._id)) return Promise.reject(new Error('Вы не можете удалять чужие карточки!'));
      Card.remove(card)
        // eslint-disable-next-line no-shadow
        .then((card) => res.send({ data: card }))
        .catch(() => {
          throw new BadRequestError('Неверный запрос');
        })
        .catch(next);
    })
    .catch(() => {
      throw new BadRequestError('Неверный запрос');
    })
    .catch(next);
};
