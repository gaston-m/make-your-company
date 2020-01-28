const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.send('Bienvenido desde Users')

});

module.exports = router;