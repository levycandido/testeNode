http = require ('http');

function retorna(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('teste node AWS');
    res.end();
}

http.createServer(retorna).listen(5000);