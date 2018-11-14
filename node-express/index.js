const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use('/dishes', dishRouter);

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send ' + req.params.dishId);
})

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported ' + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish');
    res.end('will update the dish: ' + req.body.name +
        ' with the detail ' + req.body.description
    )
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting the dishe ' + req.params.dishId);
})


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body> Express Serve me </body></html>')
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log('Server Running...');
})