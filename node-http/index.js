const http = require('http');
const hostname = 'localhost';
const port = 3000;
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log("reqquest for " + req.url + 'by method ' + req.method);
    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') {
            fileUrl = '/index.html';
        } else {
            fileUrl = req.url;
        }
        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body> Error </body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        }
    } else {

    }
})

server.listen(port, hostname, () => {
    console.log('Server Running')
})