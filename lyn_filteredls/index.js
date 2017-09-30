let fs = require('fs');
let extension="."+process.argv[3];
fs.readdir(process.argv[2],callback);
function callback (err,list){
    if(err)
    console.log(err);
 for(let i=0;i<list.length;i++){
     if(list[i].endsWith(extension))
     console.log(list[i]);
 }
}