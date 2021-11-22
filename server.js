const http= require('http');
const TodoList= require('./lib');

const hostname = '127.0.0.1';
const port = 8080;

const todos=[
    {id:1,label:'email parcing'},
    {id:2,label:'Write todos for the day'},
    {id:3,label:'Review yesterday code'},
    {id:4,label:'Implement new feature'},
]


const server = http.createServer(function(req,res){
    // processing 
    res.statusCode=301;
    res.setHeader('Content-Type','text/html');
    res.setHeader('token','mean-stack');
    if(res.statusCode===404)
        res.end("<h1>Error :( Notfound </h1>")
    else{
        let body=`Hello`
        res.end(`<html><body>${body}</body></html>`);
    }
  
});

server.listen(port,hostname,function(){
    console.log(`Server listening on ${hostname}:${port}`);
})
