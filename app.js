const express = require('express');


//express app

const app = express();
app.set('view engine', 'ejs');

//listen for request

app.listen(3000);

app.get('/', (req,res) => {
    //res.send('<p>Home page </P>');
    res.render('index', {title: "Home"});
})

app.get('/ABOUT', (req,res) => {
    res.render('about',{title: "About Us"});

})
app.get('/blogs/create', (req,res)=>{
    res.render('create',{title: "New Blog"});
})
//404 pages
app.use((req,res)=>{
    res.render('404',{title: "File Not found"});
})





