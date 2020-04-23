const {User, Room, RoomUser} = require('../models')

class RoomUserController{
    static show(req, res){
        User.findAll({include: Room})
        .then(data =>{
            // res.send(data)
            res.render('bookinformation', {data})
        }).catch(err => {
            console.log(err)
            res.send(err);
        });
        // res.render('bookinformation')
    }

    static bookForm(req, res){
        Promise.all([
            User.findAll(),
            Room.findAll()
        ]).then(([user, room]) =>{
            res.render('bookform', {user, room})
        }).catch(err => {
            res.send(err);
        });
    }

    static book(req, res){
        // res.send(req.body)
        RoomUser.create({
            UserId: Number(req.body.UserId),
            RoomId: Number(req.body.RoomId),
            date: Number(req.body.date)
        }).then(data =>{
            res.redirect('/bookinformation')
        })
    }
}

module.exports = RoomUserController

