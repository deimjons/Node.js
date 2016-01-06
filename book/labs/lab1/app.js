var http = require('http');
function app (request, response){
    var fs = require('fs');
    var content = fs.readFileSync('labs/lab1/index.html');
    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.write('Hello Alex!');
    response.write(decodeURIComponent(content));
    response.end();
}
http.createServer(app).listen(8081);
console.log('Listening on 8081...');