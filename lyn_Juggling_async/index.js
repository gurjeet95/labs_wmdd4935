const http = require("http");
let count=0;
let information=[];

for(let i=0;i<3;i++){
http.get(process.argv[2+i],callback);
function callback(response){
    information[i]= "";
    response.setEncoding('utf8')
    response.on("data",function(data)
    {
      information[i]+=data;
    }
    );
    response.on('end', function(){
        count++;
        if(count>=3){
            for(let j=0; j<information.length;j++){
                console.log(information[j]);
            }
        }
    });
}
}
