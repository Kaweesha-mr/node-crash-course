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


//!passing data to the database
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title:'new blog 2',
    snippet:'about my new blog',
    body:'more about my new blog'
  });

  blog.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    console.log(err)
  })
  })

  //!end of passing data to the database



  //?retrive all data from database
app.get('/all-blogs',(req,res)=>{  Blog.find()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    console.log(err)
  }
  )})
//!get data from specif id in database
  app.get('/single-blog',(req,res)=>{ 
     Blog.findById('5f9b6b7b9b0b6e1f0c4b3b1e') 
  .then((result)=>{
    res.send(result)
  }
  )}
  )



app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});