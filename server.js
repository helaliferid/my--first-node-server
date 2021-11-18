const http= require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(function(req,res){
    // processing 
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(`<html>
    <body>
                <pre>
                <code>
                    ${req.method}
                    </code>
                </pre>
                    <h1 style="color:blue;">Hello World from my Node Server</h1>
                    </body>
            </html>`);
  
});

server.listen(port,hostname,function(){
    console.log(`Server listening on ${hostname}:${port}`);
})
