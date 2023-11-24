//there are 2 1 is read streams and write streams




const fs = require('fs');


const readStream = fs.createReadStream('/docs/blog3.txt', {encoding: 'utf8'});

readStream.on('data',(chunk) => {


    comsole.log('----NEW CHUNK----');
    console.log(chunk.toString());

})




