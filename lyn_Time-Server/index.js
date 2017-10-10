 let net = require('net')  
 function appendzero(data){
     if(data<10){
        return "0"+data;
     }
     return data;
 }
     let server = net.createServer(function (socket) { 
      let date =new Date();
      let year=date.getFullYear();
      let month=date.getMonth()+1;
      month=appendzero(month);
      let day=date.getDate();
      let hours=appendzero(date.getHours());
      let minutes=appendzero(date.getMinutes());
      
     socket.write(`${year}-${month}-${day} ${hours}:${minutes}`);
      socket.end('\n');
     })  
     server.listen(Number(process.argv[2])) ; 