const http= require('http');
const parser = require('url');
const lib= require('./lib');

const hostname = '127.0.0.1';
const port = 8080;


//  {id:1,label:'email parcing',isDone:false},


const server = http.createServer(function(req,res){
    //handle request data
    let _url=parser.parse(req.url,true);
    let method=req.method;

    setHeadersToRequest(res,200,{type:'Content-Type',value:'application/json'});

    switch (method) {
        case 'POST':
            if(_url.pathname==="/addTodo"){
                //TODO: retrieve the body of the request and passe it to SaveInfFile
                res.end(`{"message":"addTodo Works"}`)
            }else{
                res.end(`{"message":"This is a TODO LIST API"}`);
            }
            
            break;
        case 'GET':
            if(_url.pathname==="/getTodos"){
                 //TODO: retrieve todos from the file
                res.end(`{"message":"getTodos Works"}`)
            }else{
                res.end(`{"message":"This is a TODO LIST API"}`);
            }  
            break;
    
        default:
            res.end(`{"message":"This is a TODO LIST API"}`);
            break;
    }


    
  
});

server.listen(port,hostname,function(){
    console.log(`Server listening on ${hostname}:${port}`);
})


function setHeadersToRequest(res,_statusCode,header){
    res.statusCode=_statusCode;
    res.setHeader(header.type,header.value);
}