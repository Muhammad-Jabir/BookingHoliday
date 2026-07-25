const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const passport = require('passport');
const { route } = require('./listing.js');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controllers/users.js');

//Signup
router.route('/signup')
.get(userController.renderSignupForm)
.post(userController.signup);

//Login
router.route('/login')
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.login);

//Logout
router.get('/logout', userController.logout);

module.exports = router;