
// model js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId;

const User = new Schema({
    name: { type: String, required: true,trim:true },
   password:{
       type:{String,required:true}
   }


}, { timestamps: true });

// Course.save(function(err) {

// })

module.exports = mongoose.model('User', User)