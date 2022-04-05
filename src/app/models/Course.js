// model js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
    // plugin slug
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, minlength: 1, maxlength: 255, required: true },
    description: String,
    image: { type: String },
    slug: { type: String, slug: 'name', maxlength: 255, unique: true },
    level:{type:Number,required:true},
    videoId: { type: String, maxlength: 255 },
    
    
}, { timestamps: true });

// add plugin 2 caach
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ overrideMethods: 'all',deletedAt:true })

module.exports = mongoose.model('Course', Course)