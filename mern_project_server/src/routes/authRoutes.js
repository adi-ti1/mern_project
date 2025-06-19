const express = require('express');
const authController = require('../controller/authController');
const router= express.Router(); //instance of router
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/isUserLoggedIn', authController.isUserLoggedIn);

module.exports = router;