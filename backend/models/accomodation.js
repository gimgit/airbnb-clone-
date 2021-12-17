'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accomodation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Accomodation.init({

    accomoId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    location: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    accomoImg: DataTypes.STRING,
    accomoAdress: DataTypes.STRING,
    accomoTitle: DataTypes.STRING,
    accomoInfo1: DataTypes.STRING,
    accomoInfo2: DataTypes.STRING,
    accomoRating: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Accomodation',
  });
  return Accomodation;
};
