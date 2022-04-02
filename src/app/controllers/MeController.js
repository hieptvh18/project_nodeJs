const Course = require('../models/Course');
const { mongooseToObject, muntipleMongooseToObject } = require('../../util/mongoose');
const { rawListeners } = require('../models/Course');
// handle data bla bla

class MeController {

    // GET me/stored/courses
    index(req, res,next) {
        // get data
        Course.find({})
            .then(courses => res.render('me/stored-courses',{
                courses:muntipleMongooseToObject(courses)
            }))
            .catch(next)
    }

    // get/:slug
    edit(req, res, next) {
        // get slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/detail', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    

}

// export khoi tao class 
module.exports = new MeController;