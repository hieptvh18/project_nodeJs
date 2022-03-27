const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { rawListeners } = require('../models/Course');
// handle data bla bla

class CourseController {

    // GET/news
    index(req, res) {

    }

    // get/:slug
    show(req, res, next) {
        // get slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/detail', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    // creata [method GET]
    create(req, res, next) {
        res.render('courses/create')
    }

    // save add [method POST]
    store(req, res, next) {

        // validate bla bla

        const formData = req.body;
        // get image of video youtobe
        formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

        const course = new Course(formData);
        course.save()
            .then(response => {
                res.redirect('/course/create?msg=Create success!')
            })
            .catch(next);
    }

}

// export khoi tao class 
module.exports = new CourseController;