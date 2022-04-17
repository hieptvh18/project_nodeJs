const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express()
const port = 5000
// fake method
var methodOverride = require('method-override')

// middleware
const SortMiddleware = require('./app/middlewares/SortMiddleware');


//--------------------------------------------//
// config load tài nguyên trong public
app.use(express.static(path.join(__dirname, 'public')))

// middleware handle form
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(methodOverride('_method'))

// custom middleware
app.use(SortMiddleware);
// middleware global
// app.use(auth);

// function auth(req,res,next){
//     if(['admin','employee'].includes(req.query.role)){
//         return next();
//     }
//     res.status(403).json({
//         "message":"Access denied!"
//     })
// }

// route
const route = require('./routes');

const exphbs = require('express-handlebars');
const { urlencoded } = require('express');

// define helpers
const hbs = exphbs.create({ 
    extname: '.hbs',
    helpers:{
        sum: (a,b)=> a+b ,
        sortable:(field,sort)=>{
            const sortType = field === sort.column? sort.type : 'default';

            const icons = {
                default:'fa-sort',
                asc:'fa-sort-amount-asc',
                desc:'fa-sort-amount-desc'
            }

            const types = {
                default:"desc",
                asc:"desc",
                desc:"asc"
            }

            const icon = icons[sortType]
            const type = types[sortType]

            return `<a href="?_sort&column=${field}&type=${type}"><i class="fa ${icon}" aria-hidden="true"></i></a>`;
        }
    }
    });
const db = require('./config/db/index');

// TEMPLATE ENGINE
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources','views')); // window đổi dấu /


//HTTP logger
app.use(morgan('combined'));

// routing
route(app);

// db
db.connect() 

// port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

/**
 * install and config de build dc project nodejs: install express(framework nodejs)
 * +install nodemon -> live change code
 * +install node-sass: live change code sass -> config package.json
 * 
 * 
 */