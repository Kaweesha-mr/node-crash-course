const express = require('express');


//express app

const app = express();
app.set('view engine', 'ejs');

//listen for request

app.listen(3000);

app.get('/', (req,res) => {
    //res.send('<p>Home page </P>');
    res.render('index');
})

app.get('/ABOUT', (req,res) => {
    res.sendFile('./views/about.html',{root: __dirname});

})

//redirect
app.get('/about-us', (req,res) => {
    res.redirect('/about');
})
   
//404 pages
app.use((req,res)=>{
    res.sendFile(res.sendFile('./views/404.html',{root: __dirname}))
})


