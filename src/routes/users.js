const express = require('express');
const router = express.Router();
const { users } = require ('../controllers')


router.get('/signin', users.signin);
router.post('/signin', users.auth);
router.get('/signup', users.signup);
router.get('/', users.getUsers)

module.exports = router;
