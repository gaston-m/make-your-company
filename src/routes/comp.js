const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.send('Saludos desde Comp')

});

module.exports = router;