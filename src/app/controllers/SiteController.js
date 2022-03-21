const Course = require('../models/Course');


class SiteController{

    // contact display
    contact(req,res){
        res.render('contact');
    }
    // home
    home(req,res,next){
        // get data
        Course.find({})
        .then(courses=>res.render('home',{courses}))
        .catch(next)
        // res.render('home')
    }


    // function err
    // next(er){

    // }
}

module.exports = new SiteController;