const bcrypt = require('bcrypt');

module.exports = {
    encrypt: (password) =>{
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
        // Store hash in your password DB.
    },
    compare: (password, hash) => {
        return bcrypt.compareSync(password, hash)
    }
}