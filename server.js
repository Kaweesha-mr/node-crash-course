const http = require('http');
const fs = require('fs');
const _ = require('lodash')


const server = http.createServer((req, res) => {

    //loadash

    const num = _.random(0,20);
    const greet = _.once( () => {
        
        console.log("hellow")

    } ) 

    console.log(num);
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            req.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            req.statusCode = 200;
            break;
        case '/about':
            req.setHeader('Location', '/about');
            req.statusCode = 301;
            break;
        default:
            path += '404.html';
            req.statusCode = 404;
            break;
    }

    //read the html file

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.end(data);
        }
    })
});


server.listen(3000, 'localhost', () => {
    console.log('listing for request on port 3000')
})

