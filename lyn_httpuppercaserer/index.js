const http= require("http");
http.createServer(function(req,res){
    let info="";
     if (req.method == 'POST') {
    req.on("data",function(data){
        info+=data;
    })
    req.on('end', () => {
        res.write(info.toUpperCase());
        res.end();
    })
     }
}).listen(Number(process.argv[2]));



    