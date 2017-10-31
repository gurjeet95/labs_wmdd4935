const http= require('http');
const url = require('url');
function unixtime(time){
         return {
                  unixtime:time.getTime()
          }
}


function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}
http.createServer(function(req,res){
   const qs = url.parse(req.url,true);
   let time=new Date(qs.query.iso);
   console.log(time);
   res.writeHead(200, { 'Content-Type': 'application/json' }) 
   if(qs.pathname=="/api/unixtime"){
         console.log("yes");
         res.write(JSON.stringify(unixtime(time)));
          
   }
   else if(qs.pathname=="/api/parsetime"){
           res.write(JSON.stringify(parsetime(time)));
           
   }
   
      res.end(); 
}).listen(Number(process.argv[2]));

