const express = require('express')
const router = express.Router()
var multer = require('multer');
var path = require('path');
const HomeController = require('../controller/HomeController')
const RoomController = require('../controller/RoomController')
const UserController = require('../controller/UserController')
const RoomUserController = require('../controller/RoomUserController')

const { Room, User, RoomUser } = require('../models')

//MULTER START

//set storage engine
const storage = multer.diskStorage({
    destination : path.join(__dirname + './../public/images/'),
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() +
        path.extname(file.originalname));
    }
});

//init upload
const upload = multer({
    storage : storage
}).single('picture');

router.get('/addPhoto/:id?', (req, res) =>{
    res.render('upload', {data: req.params})
})

router.post('/addPhoto/:id?', function(req, res){
    upload(req, res, err => {
        // res.send(req.file.filename)
        Room.update({
            path_photos: req.file.filename
        },{
            where:{
                id: Number(req.params.id)
            }
        }).then(data =>{
            res.redirect('/room')
        }).catch( err =>{
            res.send(err)
        })
        // if (err) throw err
        // var sql = "INSERT INTO product (picture) VALUES('"+req.file.filename+"')";
        // connection.query(sql, function(err, results){
        //  //script lain misal redirect atau alert :D 
        // })
     });
 });


//MULTER FINISH

router.get('/', HomeController.home)
router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)
router.get('/user/:id?', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.redirect('/login')
    }
} ,UserController.show)
router.get('/user/:id?/edit', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.redirect('/login')
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
        res.redirect('/login')
    }
} , RoomController.show)
router.get('/room/add', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.redirect('/login')
    }
} , RoomController.addForm)
router.post('/room/add', RoomController.add)
router.get('/room/:id?/edit', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.redirect('/login')
    }
} , RoomController.editForm)
router.post('/room/:id?/edit', RoomController.edit)
router.get('/room/:id?/delete', RoomController.delete)

//ROOMUSER
router.get('/bookinformation', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.redirect('/login')
    }
} , RoomUserController.show)
router.get('/bookform', (req, res, next) =>{
    if(req.session.isLogin == true){
        next()
    } else{
        res.redirect('/login')
    }
} , RoomUserController.bookForm)
router.post('/bookform', RoomUserController.book)




module.exports = router