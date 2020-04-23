const {Room} = require('../models')

class RoomController {
    static showRoom(req,res){
        Room.findAll({
            order : [
                ['name', 'ASC']
            ]
        })
        .then( data=> {
            res.render('listRoom', {data})
        })
        .catch(err=> {
            res.send(err)
        })
    }
    static addRooms(req,res){
        const alert = req.query
        Room.findAll()
        .then(data=> {
            res.render('addRoom', {data,alert})
        })
        .catch( error=> {
            res.send(error)
        })
        
    }
    
    static addRoomsPost(req,res){
        Room.create({
            name: req.body.name,
            capacity : Number(req.body.capacity)
        })
        .then(() => {
            const msg = `Room : ${req.body.name} has been added`
            res.redirect(`/Room?msg=${msg}`)})
        .catch(err=>{
            res.send(err)
        })
    }

    static editRoom(req,res){
        const alert = req.query
        let dataPH
       Room.findAll()
        .then( data => {
            dataPH = data
            return Room.findByPk(Number(req.params.id))
        })
        .then(data => {
            res.render('editRoom',{data,dataPH,alert})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editRoomPost(req,res){
        Room.update({
            name: req.body.name,
            capacity : Number(req.body.capacity)
        },{
            where: {id : Number(req.params.id)}
        })
        .then(()=> {
            const msg = `Room ${req.body.name} has been edited`
            res.redirect(`/Room?msg=${msg}`)})
        .catch(err => {
            res.send(err)
        })
    }

    static deleteRoom(req,res){
        Room.destroy({
            where : {id : Number(req.params.id)}
        })
        .then(() => {
            const msg = `Room has been deleted`
            res.redirect(`/Room?msg=${msg}`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = RoomController