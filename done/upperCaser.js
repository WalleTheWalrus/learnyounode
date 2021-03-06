var http = require('http')
var map = require('through2-map')
var fs = require('fs')

var server = http.createServer(function(req, res){
    req.setEncoding('utf8')
    if (req.method != 'POST'){
        return res.end('Send me POST')
    }
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
    
    req.on('end', ()=>{
        res.end();
    })

})
server.listen(process.argv[2]);