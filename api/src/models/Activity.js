const { DataTypes, Sequelize } = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('activity', {
        
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        
        difficulty:{
            type:DataTypes.STRING,
            
        },
        duration:{
            type:DataTypes.STRING,
            

        },
        season: {
            type: DataTypes.STRING,
            
        }

    },{timestamps:false})
}