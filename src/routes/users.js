const express = require('express');
const router = express.Router();
const { users } = require ('../controllers')

router.get('/', (req, res) => {

    res.send('Bienvenido desde Users')

});

router.get('/signin', users.signin);
router.post('/signin', users.auth);
router.get('/signup', users.signup);
router.post('/signup', users.postup)

module.exports = router;
