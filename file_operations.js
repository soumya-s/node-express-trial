//synchronouus


// const fs = require("fs");
// const data = fs.readFileSync("readFile.txt");
// console.log(data.toString());

//asynchronous

const file = require("fs");
// file.readFile("readFile.txt",function(err,datas){
//     if(err){
//         console.log(err);
//     }
//     console.log("Asynch data s"+datas.toString());
// });

// writing to an existing file

file.writeFile("readFile.txt","write file",function(err){
    if(err){
        console.log(err);
    }
    console.log("written successfully");
});

file.readFile("readFiles.txt",function(err,data){
    if(err){
        console.error(err);
    }
    console.log("new data "+data);
});
 