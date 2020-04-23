const routers = require('express').Router()
const RoomController = require('../controllerr/RoomController')


routers.get('/', RoomController.showRoom)


module.exports = routers