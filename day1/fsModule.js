var fs = require('fs');

// here wea re going to first create a directory using the node js
fs.mkdir('vinayjain',(err)=>{
    if(err){
        // so a erro is created
        console.log(err);
    }
    else{
        console.log("created a directory Successfully");
    }
});

// now we are going to write inside a file in the nodejs

fs.writeFileSync("intro.txt","Hello everybody this is vinay jain",(err)=>{
    if(err){
        console.log("error occured while creating a file in the node js is", err);
    }
    else{
        console.log("successfully done");
    }
});

// now weare going to define the file inside the vinayjain dir
var filepath='./vinayjain/intro.txt';
fs.writeFileSync(filepath,"Hello everybody this is vinay jain",(err)=>{
        if(err){
            console.log("error occured while creating a file in the node js is", err);
        }
        else{
            console.log("successfully done");
        }
    });

  
//now we are going to add extra data inside the preious created file


var filepath='./vinayjain/intro.txt';
fs.appendFileSync(filepath,"and i am going to start the node js", (err)=>{
    if(err){
        console.log("error occured is ",err);
    }
    else{
        console.log("Successfull done");
    }
})

//now we are going to read the data of the file

var filepath='./vinayjain/intro.txt';
fs.readFileSync(filepath,(err,data)=>{
    if(err){
        console.log("error occured while reading the data from the file is ", err);
    }
    else{
        console.log("data is ",data);
    }
});

fs.readFileSync(filepath, 'utf-8', (err,data)=>{
    //here we are using the encoding to read the data without the buffer
    if(err){
        console.log("error is", err);
    }
    else{
        console.log(data);
    }
});

//reading the large files data
var stream= fs.createReadStream(filepath,{encoding: 'utf-8'});
stream.on('data', (chunk)=>{
    console.log("data in the chunk is ", chunk);
})

stream.on('end', () => {
    console.log('End of file reached');
});


//writting the data in the form of the stream

var writestream= fs.createWriteStream(filepath,{encoding: 'utf-8'});
writestream.write("this is the first chunk of the data");
writestream.write("this is the second chunk of the data");


//renaming a directory
fs.renameSync('vinayjain',"nodeintro",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Succesfully done");
    }
});

// going to delete a file
fs.rmdir('nodeintro',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("done");
    }
});

// deleting a file using the nodejs
fs.unlinkSync('nodeintro.txt',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("done");
        }
});

/// it will raise a error if the file is not found.
