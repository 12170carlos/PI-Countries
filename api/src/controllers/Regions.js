const { Region } = require('../db');

const getRegions = (req, res, next) => {

    return Region.findAll({
        attributes: ['name']
    })
    .then((reg) => res.json(reg))
    .catch((err) => next(err))
}
module.exports = getRegions;