// model js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String,minlength:1,maxlength:255},
  description: String,
  image: String,

},{timeseries:true});

module.exports =  mongoose.model('Course',Course)