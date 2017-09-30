let mymod = require('./mod1');
let extension=process.argv[3];
mymod(process.argv[2],extension,callback);
    
function callback(err,list){
    if(err)
    console.log(err);
    for(let i=0;i<list.length;i++){
     console.log(list[i]);
 }
}
    
