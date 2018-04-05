var express = require('express');
var parser = require('body-parser');
var app = express();
var Post = require('./src/post.js');
var db = require('./src/db');

app.use(parser.json());
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/layouts/index.html')
})

app.get('/api/posts', function (req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function (err, posts) {
            if (err) {
                return next(err)
            }
            res.json(posts)
        })
});

app.post('/api/posts', function (req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });
    post.save(function (err, post) {
        if (err) { return next(err) }
        res.status(201).json(post)

    })
})
app.post('/api/removePost', function (req, res, next) {
    var id = req.body.id;
 Post.find()
    .remove({ _id: id } )
    .sort('-date')
    .exec(function (err, posts) {
    if (err) {
        return next(err)
    }
    res.json(posts)
})
});
app.listen(3000, function () {
    console.log('server is running ');
})