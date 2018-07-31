var http = require('http');

function serve(ip, port)
{
        http.createServer(function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("There's no place like "+ip+":"+port+"\n");
        }).listen(port, ip);
        console.log('Server running at http://'+ip+':'+port+'/');
}

serve('127.0.0.1', 9000);
serve('127.0.0.1', 9001);
serve('127.0.0.1', 9002);
serve('127.0.0.1', 9003);
serve('127.0.0.1', 9004);
serve('127.0.0.1', 9005);
