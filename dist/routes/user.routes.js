"use strict";
var Router = require('express');
var router = new Router();
var userController = require('../controller/user.controller');
router.get('/getUsers', userController.getUsers);
module.exports = router;
