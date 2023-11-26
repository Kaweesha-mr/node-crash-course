//this shows to we create scheema and model in different file


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});

//create model for the shceema

//two arguments 1st name of the model 2nd schema
const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;