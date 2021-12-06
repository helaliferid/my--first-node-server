const http = require('http');
const parser = require('url');

const hostname = '127.0.0.1';
const port = 8080;


const server = http.createServer(function (req, res) {
    //handle request data
    let _url = parser.parse(req.url, true);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('token', 'mean-stack');
    let a = Number(_url.query.a);
    let b = Number(_url.query.b);
    if (_url.pathname === '/add') {
        res.end(`{
            "METHOD":${req.method},
            "url":${JSON.stringify(_url)},
            "result of add":${a + b}}`
        );
    } else if (_url.pathname === "/multiply") {
        res.end(`{
            "METHOD":${req.method},
            "url":${JSON.stringify(_url)},
            "result of add":${a * b}}`
        );

    } else {
        res.end(`{
            "message":"Wrong call"
        }`);

    }

});

server.listen(port, hostname, function () {
    console.log(`Server listening on ${hostname}:${port}`);
})
