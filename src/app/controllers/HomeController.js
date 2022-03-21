const Course = require('../models/Course');

class HomeController{
    // index(req, res,next){

    //     // get data
    //     Course.find({},async function(err,docs){
    //         try{
    //             res.json(docs)
    //         }catch(er){
    //             res.status(400).json({message:'Khong the get data'})
    //         }
    //     })
    //     // res.render('home')
    // }
}

module.exports = new HomeController;