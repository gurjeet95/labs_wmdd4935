const http = require("http");
http.get(process.argv[2],callback);
let information="";
function callback(response){
    response.setEncoding('utf8')
    response.on("data",function(data)
    {
      information+=data;
    }
    )
    response.on('end', function(){
        console.log(information.length);
        console.log(information);
    });
}