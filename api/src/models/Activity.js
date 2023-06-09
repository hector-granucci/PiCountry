const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
      },
      duration: {
        type: DataTypes.FLOAT,
      },
      season: {
        type: DataTypes.ENUM("Verano", "Otoño"," Invierno", "Primavera"),
        allowNull: false,
      },
    });
  };