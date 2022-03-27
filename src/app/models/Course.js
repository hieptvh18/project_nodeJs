// model js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
    // plugin slug
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);



const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, minlength: 1, maxlength: 255, required: true },
    description: String,
    image: { type: String },
    slug: { type: String, slug: 'name', maxlength: 255, unique: true },
    videoId: { type: String, maxlength: 255 },


}, { timestamps: true });

// Course.save(function(err) {

// })

module.exports = mongoose.model('Course', Course)