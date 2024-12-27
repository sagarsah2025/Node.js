const {Console} = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/htnl')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
    res.end('<h1> This is CodewithSagar</h1> <p> Hey this is the way to rock the world!<p/>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About CodewithSagar</h1> <p> Hey this is about CodewithSagar!<p/>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('imdex.html');
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p>Hey this page was not found on this server</p>')
    }
})

server.listen(port, ()=>{
 console.log('Server is listing on port ${port}');
});