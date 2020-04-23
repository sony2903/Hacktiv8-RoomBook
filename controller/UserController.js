const {User, Room} = require('../models')
const {compare} = require('../helper/bcrypt')

class UserController{
    static registerForm(req, res){
        res.render('registerform')
    }

    static register(req, res){
        if(req.body.password == req.body.passwordConfirm){
            User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender,
                phone_number: req.body.phone_number
            }).then(data =>{
                res.redirect('login')
            })
        } else{
            res.send('Password Tidak Sama')
        }
        
    }

    static loginForm(req, res){
        res.render('loginform')
    }
    
    static login(req, res){
        User.findOne({where:{email:req.body.email}})
        .then(data =>{
            if(compare(req.body.password,data.password)){
                req.session.isLogin = true
                res.redirect(`/user/${data.id}`)
            } else{
                res.send('password salah')
            }
        }).catch(err =>{
            res.send('email tidak terdaftar')
        })
    }

    static logout(req, res){
        delete req.session.isLogin
        res.redirect('/')
    }

    static show(req, res){
        User.findAll()
        .then(data =>{
            res.render('user', {data})
        }).catch(err => {
            res.send('anda belum login')
        })
    }

    static delete(req, res){
        User.destroy({where: {id:req.params.id}})
        .then(data =>{
            res.redirect('/user')
        }).catch(err => {
            res.send(err)
        })
    }

    static editForm(req, res){
        // res.send(req.body)
        User.findByPk(req.params.id)
            .then(data =>{
                res.render('edituserform', {data})
            }).catch(err => {
                res.send(err)
            })
    }

    static edit(req, res){
        // res.send(req.body)
        User.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            email: req.body.email,
            gender: req.body.gender
        },{where:{
            id:req.params.id
        }}).then(data =>{
            res.redirect('/user')
        }).catch(err => {
            res.send(err)
        })
    }
}

module.exports = UserController