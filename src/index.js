const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express()
const port = 5000

    //--------------------------------------------//
    // config load tài nguyên trong public
app.use(express.static( path.join(__dirname, 'public')))

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });

    // TEMPLATE ENGINE
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views')); // window đổi dấu /


//HTTP logger
app.use(morgan('combined'));

// routing
app.get('/', (req, res) => {
    res.render('home')
});

app.get('/news', (req, res) => {
    res.render('news')
});


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