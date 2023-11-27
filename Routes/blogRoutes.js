
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');



router.get('/',(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'All Blogs',blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    })
}
)

router.post('/',(req,res)=>{
  //past data to database using port
  const blog = new Blog(req.body);
  blog.save()
  .then((result)=>{
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err)
  })

})



router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });

//retrive and show data in html
router.get('/:id',(req,res)=>{
  const id = req.params.id;
  Blog.findById(id)
  .then((result)=>{
    res.render('details',{blog:result,title:'Blog Details'})
  })
  .catch((err)=>{
    console.log(err);
  })
}
)
 
router.delete('/:id',(req,res)=>{
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
  .then((result)=>{

    //this will send the json data to the browser
    //becouse when ajax used cant send the redirect
    res.json({redirect:'/'})
  })
  .catch((err)=>{
    console.log(err);
  })
}
)




module.exports = router;