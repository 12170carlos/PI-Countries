const axios = require('axios');
const { Op } = require("sequelize");
const { Country, Activity, Subregion, Region } = require('../db');



const getAllCountries =  (req, res,next) => {
    

        const { name} = req. query;

        if (name){
            return Country.findAll({
                where: {
                    name: 
                    {
                        [Op.iLike]:  '%' + name + '%'                
                    }
                        
                },
                include: {
                    model: Subregion,
                    attributes: ['name'],
                    include: {
                        model: Region,
                        attributes: ['name']
                    }
                }
            })
            .then((countries) => res.json(countries))
            .catch((err) => next(err))
        }

        return Country.findAll({
            
            include: [{
                model: Activity,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            },{
                model: Subregion,
                attributes: ['name'],
                include: {
                    model: Region,
                    attributes: ['name']
                }
            }]
        })
        
        .then((countries) => res.json(countries))
        .catch ((err)=> next(err)) 
    
};


const getCountriesById  =  (req, res, next) => {
    let idCountry = req.params.idCountry;
    
    return Country.findByPk(idCountry.toUpperCase(), {
        include: [{
            model: Activity,
            
            through: {
                attributes: [],
            }
        }, {
            model: Subregion,
            attributes: ['name'],
            include: {
                model: Region,
                attributes: ['name']
            }
        }]
    })
    .then((country) => res.json(country))
    .catch((err) => next(err))
};




module.exports  = {
    
    getAllCountries,
    getCountriesById
    
}