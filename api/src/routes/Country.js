const { Router } = require('express');
const { Op } = require("sequelize");
const {Country, Activity} = require('../db')
const router = Router();
const axios = require('axios');
const { getAllCountries, loadCountries, getCountriesById } = require('../controllers/Country');

router.get('/', loadCountries);
router.get('/:idCountry', getCountriesById)

module.exports = router;