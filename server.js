const http= require('http');
const lib= require('./lib');

const hostname = '127.0.0.1';
const port = 8080;

const todos=[
    {id:1,label:'email parcing'},
    {id:2,label:'Write todos for the day'},
    {id:3,label:'Review yesterday code'},
    {id:4,label:'Implement new feature'},
]

console.log(new lib.TodoList())

const server = http.createServer(function(req,res){
    // processing 
    let toDoList=new lib.TodoList();
    toDoList.addElementToList(  {id:1,label:'email parcing'});
    toDoList. addElementToList( {id:2,label:'Write todos for the day'});
    res.statusCode=301;
    res.setHeader('Content-Type','application/json');
    res.setHeader('token','mean-stack');
    if(res.statusCode===404)
        res.end("{'Error' :'( Notfound </h1>'}")
    else{ 
        res.end(`${JSON.stringify(toDoList._list)}`);
    }
  
});

server.listen(port,hostname,function(){
    console.log(`Server listening on ${hostname}:${port}`);
})
