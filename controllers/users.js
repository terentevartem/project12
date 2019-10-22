const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.findUserById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => (user ? res.send({ data: user }) : next()))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
