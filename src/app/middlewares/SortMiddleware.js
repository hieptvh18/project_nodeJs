module.exports = function (req,res,next){

    res.locals._sort = {
        enable : false,
        type:"default"
    }

    // check neu co sort thi active . define khung chung sort-> tao helper de dung
    if(req.query.hasOwnProperty('_sort')){
        // res.locals._sort.enable = true;
        // res.locals.type = req.query.type;
        // res.locals.column = req.query.column;

        // cach viet gi de obj
        Object.assign(res.locals._sort,{
            enable:true,
            type:req.query.type,
            column:req.query.column
        })
    }

    next();
}