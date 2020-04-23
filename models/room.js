'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Room extends Model {}

  Room.init({
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {sequelize})

  // const Room = sequelize.define('Room', {
  //   name: DataTypes.STRING,
  //   capacity: DataTypes.INTEGER
  // }, {});
  Room.associate = function(models) {
    // associations can be defined here
  };
  return Room;
};