const port = 8080;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var server = require('http').createServer(app);
var routes = require('./routes/.');
var products = require('./routes/products');
var inventory = require('./routes/inventory');
var sales = require('./routes/sales');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());

// app.use(express.static(__dirname + '/www/static'));
// app.use(bodyParser.json());

app.get('/', routes.index);
// app.use
app.use('/api/products', products);
app.use('/api/inventory', inventory);
app.use('/api/sales', sales);

// app.get('*', routes.index);

server.listen(port, function() {
    console.log('Listening on port: ' + port);
});
