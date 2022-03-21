
// config database mongodb
const mongoose = require('mongoose');

async function connect(){

    try{
        await mongoose.connect('mongodb://localhost:27017/f8_nodejs_dev');
        console.log('connect successfully')
    }catch(err){
        console.log('connect fail')
    }
}

module.exports = {connect}