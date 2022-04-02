const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');

class UserController{
    sigin(req,res,next){
        res.send('login')
    }


}

module.exports = new UserController