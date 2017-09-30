let fs = require('fs');
fs.readFile(process.argv[2],afterread);
function afterread(err,data){
    if(err)
        console.log(err)
     let content=   data.toString()
    let lines=content.split('\n');
console.log(lines.length-1);
}
