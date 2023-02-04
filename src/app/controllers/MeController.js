const Course = require('../models/Course');
const { mongooseToObject, muntipleMongooseToObject } = require('../../util/mongoose');
const { rawListeners } = require('../models/Course');
// handle data bla bla

class MeController {

    // GET me/stored/courses
    index(req, res,next) {

        let courseQuery = Course.find({});

        // check option sort(use middleware)
        if(req.query.hasOwnProperty('_sort')){
            // gan them action + change type sort
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        // call promise theo thu tu
        Promise.all([Course.countDocumentsDeleted(),courseQuery])
        .then(([count,courses])=>{
             res.render('me/stored-courses',{
                 countDeleted:count,
                courses:muntipleMongooseToObject(courses)
            })
        })

        // Course.countDocumentsDeleted()
        // .then(count=>{
        //     console.log(count)
        // })

        // Course.find({})
        //     .then(courses => res.render('me/stored-courses',{
        //         courses:muntipleMongooseToObject(courses)
        //     }))
        //     .catch(next)
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

    // view trash: me/trash/courses
    trashCourse(req,res,next){
        // get course deleted
        Course.findDeleted({})
        .then(courses => res.render('me/trash-courses',{
            courses:muntipleMongooseToObject(courses)
        }))
        .catch(next)
    }

    

}

// export khoi tao class 
module.exports = new MeController;