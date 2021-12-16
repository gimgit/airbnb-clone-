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
    accomoId: DataTypes.INTEGER,
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

// accomoId: {
//   allowNull: false,
//   autoIncrement: true,
//   primaryKey: true,
//   type: Sequelize.INTEGER
// },
// locationId: {
//   type: Sequelize.STRING
// },
// accomoImg: {
//   type: Sequelize.STRING
// },
// accomoAdress: {
//   type: Sequelize.STRING
// },
// accomoTitle: {
//   type: Sequelize.STRING
// },
// accomoInfo1: {
//   type: Sequelize.STRING
// },
// accomoInfo2: {
//   type: Sequelize.STRING
// },
// accomoRating: {
//   type: Sequelize.INTEGER
// },
// createdAt: {
//   allowNull: false,
//   type: Sequelize.DATE
// },
// updatedAt: {
//   allowNull: false,
//   type: Sequelize.DATE
// }
// });