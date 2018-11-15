const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const leadersRouter = require('./routes/leadersRouter');
const promoRouter = require('./routes/promotionsRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leadersRouter);

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