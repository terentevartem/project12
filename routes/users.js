const routerUsers = require('express').Router();
const { getUsers, createUser, findUserById } = require('../controllers/users');

routerUsers.get('/users', getUsers);
routerUsers.get('/users/:id', findUserById);
routerUsers.post('/users', createUser);

module.exports = routerUsers;