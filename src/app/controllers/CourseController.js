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
        // console.log(req.body);
        // validate bla bla

        const formData = req.body;
        // get image of video youtobe
        formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

        const course = new Course(formData);
        course.save()
            .then(response => {
                console.log(response);
                res.redirect('/me/stored/courses?msg=Create success!')
            })
            .catch(next);
    }

    // edit
    edit(req, res, next) {
        // vget data
        Course.findById(req.params.id)
        .then(course=>res.render('courses/edit-course',{
            course:mongooseToObject(course)
        }))

    }

    // update
    update(req,res,next){

        const formData = req.body;
        // get image of video youtobe
        Course.updateOne({_id:req.params.id},formData)
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(next)
    }

    // delete
    destroy(req,res,next){
        Course.delete({_id:req.params.id})
        .then(()=>{
            res.redirect('back')
        })
        .catch(next)
    }

    // restore[patch] courses/:id/restore
    restore(req,res,next){
        Course.restore({_id:req.params.id})
        .then(()=>{
            res.redirect('back')
        })
        .catch(next)
    }

    // forceDestroy[delete]
    forceDestroy(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(()=>{
            res.redirect('back')
        })
        .catch(next)
    }
}

// export khoi tao class 
module.exports = new CourseController;