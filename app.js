const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

//!connect to mongodb 
const dburi = 'mongodb+srv://Kaweesha:vutqek-8qinxu-Cugzyx@node.amig8cu.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dburi,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err))
//!end of connecting to mongodb



// app.use(express.static(public));
//third party midleware
app.use(morgan('dev'));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');





app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
//these are the blog routes

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'All Blogs',blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    })
}
)

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});