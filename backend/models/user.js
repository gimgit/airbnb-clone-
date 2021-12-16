'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userId: { // 프로젝트에 맞게 바꿔줌 (id로 기본 설정됨)
      primaryKey: true,
      type: DataTypes.INTEGER, // mysql은 Id를 기본적으로 INTEGER로 사용
    },
    userEmail: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

