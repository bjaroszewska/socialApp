
var express = require('express');
var parser = require('body-parser');
var app = express();
var db = require('./src/db');
app.use(parser.json())
app.use(require('./auth'));
app.use(require('./src/controllers/static'));
app.use(require('./src/controllers/posts'));
app.use(require('./src/controllers/users'))
app.use(require('./src/controllers/sessions'))
app.listen(3000, function () {
    console.log('server is running ');
})