const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promo to you!');
})
.post((req, res, next) => {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promo');
})
.delete((req, res, next) => {
    res.end('Deleting all promos');
});


promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send ' + req.params.promoId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported ' + req.params.promoId);
})
.put((req, res, next) => {
    res.write('Updating the dish');
    res.end('will update the promo: ' + req.body.name +
        ' with the detail ' + req.body.description
    )
})
.delete((req, res, next) => {
    res.end('Deleting the dishe ' + req.params.promoId);
})



module.exports = promoRouter;