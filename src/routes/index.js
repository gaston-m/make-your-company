const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.send('Bienaventurados desde Index')

});

module.exports = router;