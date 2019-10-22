const routerUsers = require('express').Router();
const { getUsers, createUser, findUserById } = require('../controllers/users');

routerUsers.get('/', getUsers);
routerUsers.get('/:id', findUserById);
routerUsers.post('/', createUser);

module.exports = routerUsers;
