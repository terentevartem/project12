const routerUsers = require('express').Router();
const users = require('../data/users.json');

routerUsers.get('/users/:id', (req, res) => {
  const { id } = req.params;

  if (!users[id]) {
    res.send({ message: 'Такого пользователя нет' });
    return;
  }

  res.send(users[id]);
});

routerUsers.get('/users', (req, res) => {
  res.send(users);
});

module.exports = routerUsers;
