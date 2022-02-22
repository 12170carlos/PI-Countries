const { DataTypes, Sequelize } = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('region', {
        
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            get() {
                const rawName = this.getDataValue('name');
                return rawName !== '' ? rawName : 'Unknown'
            }
        },

    },{timestamps:false})
}