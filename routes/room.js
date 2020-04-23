const routers = require('express').Router()
const RoomController = require('../controllerr/RoomController')


routers.get('/', RoomController.showRoom)
routers.get('/add', RoomController.addRooms)
routers.post('/add', RoomController.addRoomsPost)
routers.get('/edit/:id', MovieController.editRoom)
routers.post('/edit/:id', MovieController.editRoomPost)
routers.get('/delete/:id', MovieController.deleteRoom)


module.exports = routers