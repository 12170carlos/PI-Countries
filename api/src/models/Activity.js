const { DataTypes, Sequelize } = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('activity', {
        id:{
            type: DataTypes.UUID,
            allowNull:false,
            unique:true,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        duration:{
            type:DataTypes.INTEGER,
            allowNull: false

        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        }

    },{timestamps:false})
}