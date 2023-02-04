// const Course = require('../models/Course');

class UploadfileController{
    index(req, res,next){    
        // render view
        res.render('upload-file')
    }

    postFile(req, res, next){
        console.log(req.body)
    }
}

module.exports = new UploadfileController;