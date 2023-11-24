const fs = require('fs');

//reading a file
fs.readFile('./docs/blog1.txt',(err,data) =>{
    if(err){
        console.log(err);
    }

    console.log(data.toString());
})


//writting files

fs.writeFile('./docs/blog1.txt',' helo yashodhooooo',() => {
    console.log('file was written');
});



//directories


if(!fs.existsSync('./assets')){

    fs.mkdir('./assets',(err)=>{

        if(err){
            console.log(err);
        }
    
        console.log('folder created');
    })
}
else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    }
    )
}



if(fs.existsSync('./docs/deleteme.txt')){

    //unlink is used to delete a file
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}




//calback dunctions are used mainly in async codes to do something after the operation is completed
