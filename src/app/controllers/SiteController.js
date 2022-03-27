const Course = require('../models/Course');
const { muntipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class SiteController {

    // contact display
    contact(req, res) {
            res.render('contact');
        }
        // home
    home(req, res, next) {
        // get data
        Course.find({})
            .then(courses => {
                // covert => object fix bug cua lib handlebar new version
                res.render('home', { courses: muntipleMongooseToObject(courses) })
            })
            .catch(next)
    }


    // function err
    // next(er){

    // }
}

module.exports = new SiteController;