const http= require('http');
const parser = require('url');
const lib= require('./lib');

const hostname = '127.0.0.1';
const port = 8080;

const todos=[
    {id:1,label:'email parcing',isDone:false},
    {id:2,label:'Write todos for the day',isDone:false},
    {id:3,label:'Review yesterday code',isDone:false},
    {id:4,label:'Implement new feature',isDone:false},
]

//console.log(new lib.TodoList())

const server = http.createServer(function(req,res){
    //handle request data
    let _url=parser.urlWithStringQuery(req.url);
    
    // processing 
    let toDoList=new lib.TodoList();
    toDoList.addElementToList(  {id:1,label:'email parcing'});
    toDoList. addElementToList( {id:2,label:'Write todos for the day'});
    res.statusCode=301;
    res.setHeader('Content-Type','text/html');
    res.setHeader('token','mean-stack');
    if(res.statusCode===404)
        res.end("{'Error' :'( Notfound'}")
    else{ 
        res.end(`
            {
            list:${JSON.stringify(toDoList._list,undefined,3)},
            _rul:${JSON.stringify(parser.parse(_url,true),undefined,3)}
        }`);
    }
  
});

server.listen(port,hostname,function(){
    console.log(`Server listening on ${hostname}:${port}`);
})
