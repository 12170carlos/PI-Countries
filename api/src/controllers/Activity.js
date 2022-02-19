const axios = require('axios');
const { Op } = require("sequelize");
const { Country, Activity } = require('../db');

const postActivity = async (req,res, next) =>{
    let { name, difficulty, duration, season, country }= req.body;

    const newActivity = await Activity.create({
        name, difficulty,duration,season
    })

    let activityCountry = await Country.findAll({
        where: {name: country}
    })
    newActivity?.addCountries(activityCountry);
    res.status(200).json(activityCountry)
    // name = name.toUpperCase();
    // return Activity.findOrCreate({
    //     where: { name },
    //     default: {
    //         difficulty,
    //         duration,
    //         season,
    //     },
    // })

    // .then(async ([responseAct, creates]) => {
    //     if (countries) {
    //         let arrayCountries = countries.split(',');
    //         for (let id of arrayCountries){
    //             let countryRes = await Country.findByPk(id)
    //             await responseAct.addCountry(arrayCountries);
    //             await countryRes.addActivity(responseAct)
    //         }
    //     }
    //     return res.json(responseAct)
    // })
    // .catch((err) => next(err));
}


const getActivities = (res) => {
    return Activity.findAll()
    .then((activities) => {
        return res.json(activities)
    })
    .cath((err) => next(err))
}
module.exports = {
    getActivities,
    postActivity
}