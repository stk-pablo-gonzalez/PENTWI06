const port = 8080;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', routes.index);
// app.use
app.get('*', routes.index);