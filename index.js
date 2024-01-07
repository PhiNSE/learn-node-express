const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const app = express();

app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log(req.headers);
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//         data: 'fug u',
//     }));
// });

// app.use(bodyParser.json());
// app.use(express.static(__dirname+'/public'));

// app.all('/dishes', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// });

// app.get('/dishes', (req, res, next) => {
//     res.end('Will send all the dishes to you!');
// });

// app.post('/dishes', (req, res, next) => {
//     res.end(`Will add the dish: ${req.body.name} with details ${req.body.description}`);
// });

// app.put('/dishes', (req, res, next) => {
//     res.statusCode = 403;
//     res.end(`PUT operation not supported on /dishes`);
// });

// app.get('/dishes/:dishId', (req, res, next) => {
//     res.end(`Will sen details of the dish: ${req.params.dishId} to you`);
// });

// app.post('/dishes/:dishId', (req, res, next) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /dishes/ ${req.params.dishId}`);
// });

// app.put('/dishes/:dishId', (req, res, next) => {
//     res.write(`Updating the dish: ${req.params.dishId}\n`);
//     res.end(`Will update the dish ${req.body.name} with details ${req.body.description}`);
// });

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end(`Deleting dish ${req.params.dishId}`);
// });

app.use('/dishes', dishRouter);

const server = http.createServer(app);
const hostname = 'localhost';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});