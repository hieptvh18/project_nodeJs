// handle data bla bla

class NewsController{

    // GET/news
    index(req,res){
        res.render('news');
    }

    // get/:slug
    show(req,res){
        res.send('New detail')
    }

}

// export khoi tao class 
module.exports = new NewsController;