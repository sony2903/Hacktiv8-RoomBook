'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class RoomUser extends Model {}

  RoomUser.init({
    UserId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER,
    date: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date()
  },{sequelize})

  // const RoomUser = sequelize.define('RoomUser', {
  //   UserId: DataTypes.INTEGER,
  //   RoomId: DataTypes.INTEGER,
  //   date: DataTypes.DATEONLY
  // }, {});

  RoomUser.associate = function(models) {
    // associations can be defined here
  };
  return RoomUser;
};