const axios = require('axios');
const { Op } = require("sequelize");
const { Country, Activity } = require('../db');

const postActivity = (req,res, next) =>{
    let { name, difficulty, duration, season, countries }= req.body;

    // const newActivity = await Activity.create({
    //     name, difficulty,duration,season
    // })
    
    // let activityCountry = await Country.findAll({
    //     where: {name: country}
    // })
    // newActivity?.addCountry(activityCountry);
    // res.status(200).json(activityCountry)
    // console.log("activityCountry:", activityCountry)
    name = name.toLowerCase();
    return Activity.findOrCreate({
        where: { name },
        defaults: {
            difficulty,
            duration,
            season,
        },
    })

    .then(async ([responseAct, created]) => {
        if (countries) {
            countries.forEach(async(e) =>{
                await responseAct.addCountry(e);
            }
                );
            
        }
        return res.json(responseAct)
    })
    .catch((err) => next(err));
}


const getActivities = (req, res, next) => {
    return Activity.findAll()
    .then((activities) => {
        return res.json(activities)
    })
    .catch((err) => next(err))
}
module.exports = {
    getActivities,
    postActivity
}