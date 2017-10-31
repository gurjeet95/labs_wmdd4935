const fs=require("fs");
const http= require("http");
http.createServer(function(req,res){
    fs.createReadStream(process.argv[3]).pipe(res);
    
}).listen(Number(process.argv[2]));



    