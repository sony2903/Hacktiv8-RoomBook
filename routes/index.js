const express = require('express')
const router = express.Router()

const {User, Room, RoomUser} = require('../models')

const HomeController = require('../controller/HomeController')

router.get('/', HomeController.home)
routers.use('/room', Room)


module.exports = router