let fs = require('fs');
module.exports=
    function (dir,ext,callback){
        fs.readdir(dir,call);
        function call(err,list){
            if(err){
                return callback(err);
            }
            let files=[];
            for(let i=0;i<list.length;i++){
     if(list[i].endsWith("."+ext))
         files.push(list[i]);
 }
 
 
          return callback(null,files); 
        }
        
    }
    
