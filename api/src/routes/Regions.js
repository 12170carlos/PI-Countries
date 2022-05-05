const { Router } = require('express');
const { Op } = require("sequelize");
const getRegions = require('../controllers/Regions');

const router = Router();


router.get('/', getRegions);


module.exports = router;