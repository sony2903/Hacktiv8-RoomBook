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
}

module.exports = RoomController