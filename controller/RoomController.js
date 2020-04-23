const {User, Room, RoomUser} = require('../models')

class RoomController{
    static show(req, res){
        Room.findAll()
        .then(data =>{
            res.render('room', {data})
        }).catch(err =>{
            res.send(err)
        })
    }

    static addForm(req, res){
        res.render('addroomform')
    }

    static add(req, res){
        // res.send(req.body)
        Room.create({
            name: req.body.name,
            capacity: Number(req.body.capacity)
        }).then(data =>{
            res.redirect('/room')
        }).catch(err =>{
            res.send(err)
        })
    }

    static editForm(req, res){
        Room.findByPk(req.params.id)
        .then(data =>{
            res.render('editroomform', {data})
        }).catch(err =>{
            res.send(err)
        })
    }

    static edit(req, res){
        // res.send(req.body)
        Room.update({name: req.body.name, capacity:Number(req.body.capacity)}, {where: {id:req.params.id}})
        .then(data =>{
            res.redirect('/room')
        }).catch(err =>{
            res.send(err)
        })
    }

    static delete(req, res){
        Room.destroy({
            where:{
                id:req.params.id
            }
        }).then(data =>{
            res.redirect('/room')
        }).catch(err =>{
            res.send(err)
        })
    }

    static showPhoto(req, res){
        // res.send(req.params)
        res.render('photoviewer', {data : req.params})
    }
}

module.exports = RoomController