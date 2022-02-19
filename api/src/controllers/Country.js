const axios = require('axios');
const { Op } = require("sequelize");
const { Country, Activity } = require('../db');


const countriesList = async () => {
   try {
      
       
       const response = await axios.get('https://restcountries.com/v3/all');
       const countries = response.data;
       
       const countriesApi  = countries.map(c => {
       
           
           return {
               idCountry: c.cca3,
               name: c.name.common,
               flags: c.flags[1],
               continents: c.continents[0],
               capital:c.capital?.join()? c.capital.join()  : 'Not capital',
               population:c.population,
               area:c.area,
               subregion:c.subregion? c.subregion : 'Unknow',

            }
        })
        
        return countriesApi;
    } catch (error) {
        console.log(error)
    }
}

const loadCountries = async (req, res) => {
    try {
        let moodsDb =  await Country.findAll();
        if (!moodsDb || !moodsDb.length) {

            moodsDb = await countriesList();
            for (let c of moodsDb) {
                await Country.findOrCreate({
                    where: {
                        idCountry: c.idCountry,
                        name: c.name,
                        flags: c.flags,
                        continents: c.continents,
                        capital:c.capital,
                        population:c.population,
                        area:c.area,
                        subregion:c.subregion,
                    },
                })
            }
        }
        

    const totalCountries = await Country.findAll({
        include: [{
            model: Activity,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }]
    })
    
    return res.send(totalCountries)
    } catch (error) {
        console.log(error)
    }
}

const getAllCountries = (req,res,next) => {
    
        let name = req.query.name;
       
        let moods;
        
        moods =  loadCountries(res);
        if (name) {

            return Country.findAll({
                where: {
                    name: { 
                        [Op.iLike]:  '%' + name + '%'
                    }
                }
            })
            
            .then((countries) => 
                
                res.json(countries))
            .catch((err) => next(err));
             
            
        }

        return Country.findAll({
            include: [{
                model: Activity,
                through: {
                    attributes: [],
                }
            }]
        })

        
        .then((countries) => res.json(countries))
        .catch((err) => next(err))

        //moods ? res.send(moods.sort((a,b) => a.localCompare(b))) : null;
    
}


const getCountriesById  =  (req, res, next) => {
    let idCountry = req.params.idCountry;
    
    return Country.findByPk(idCountry.toUpperCase(), {
        include: [{
            model: Activity,
            
            through: {
                attributes: [],
            }
        }]
    })
    .then((country) => res.json(country))
    .catch((err) => next(err))
};




module.exports  = {
    
    loadCountries,
    getCountriesById
    
}