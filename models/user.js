'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class User extends Model {}

  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {sequelize})

  // const User = sequelize.define('User', {
  //   first_name: DataTypes.STRING,
  //   last_name: DataTypes.STRING,
  //   gender: DataTypes.STRING,
  //   phone_number: DataTypes.STRING
  // }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};