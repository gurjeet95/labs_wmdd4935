let fs = require('fs');
let data=fs.readFileSync(process.argv[2]).toString();
let lines=data.split('\n');
console.log(lines.length-1);

