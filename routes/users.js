const routerUsers = require('express').Router();
const { getUsers, findUserById } = require('../controllers/users');

routerUsers.get('/', getUsers);
routerUsers.get('/:id', findUserById);

module.exports = routerUsers;
