const express = require('express');
const router = express.Router();
const { business } = require('../controllers/index');

router.get('/', business.getbuss)
router.get('/:id', business.getbus)


module.exports = router;