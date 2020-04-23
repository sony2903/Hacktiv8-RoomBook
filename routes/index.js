const express = require('express')
const router = express.Router()
const HomeController = require('../controller/HomeController')
const RoomController = require('../controller/RoomController')
const UserController = require('../controller/UserController')
const RoomUserController = require('../controller/RoomUserController')

const { Room, User, RoomUser } = require('../models')

router.get('/', HomeController.home)
router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)
router.get('/user/:id?', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.send('belum login')
    }
} ,UserController.show)
router.get('/user/:id?/edit', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.send('belum login')
    }
} , UserController.editForm)
router.post('/user/:id?/edit', UserController.edit)
router.get('/user/:id?/delete', UserController.delete)
router.get('/logout', UserController.logout)

//ROOM
router.get('/room', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.send('belum login')
    }
} , RoomController.show)
router.get('/room/add', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.send('belum login')
    }
} , RoomController.addForm)
router.post('/room/add', RoomController.add)
router.get('/room/:id?/edit', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.send('belum login')
    }
} , RoomController.editForm)
router.post('/room/:id?/edit', RoomController.edit)
router.get('/room/:id?/delete', RoomController.delete)

//ROOMUSER
router.get('/bookinformation', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.send('belum login')
    }
} , RoomUserController.show)
router.get('/bookform', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.send('belum login')
    }
} , RoomUserController.bookForm)
router.post('/bookform', RoomUserController.book)




module.exports = router