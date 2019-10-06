const routerUsers = require('express').Router();
const users = require('../data/users.json');

routerUsers.get('/users', (req, res) => {
  res.send(users);
});

routerUsers.get('/users/:id', (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < users.length; i += 1) {
    if (users[i]._id === id) {
      res.send(users[i]);
      return;
    }
  }

  res.status(404).send({ message: 'Нет пользователя с таким id' });
});

module.exports = routerUsers;
