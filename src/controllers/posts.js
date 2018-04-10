var Post = require('../models/post.js');
var router = require('express').Router()    
router.get('/api/posts', function (req, res, next) {
        Post.find()
            .sort('-date')
            .exec(function (err, posts) {
                if (err) {
                    return next(err)
                }
                res.json(posts)
            })
    });
    
    router.post('/api/posts', function (req, res, next) {
         var post = new Post({
            username: req.body.username,
            body: req.body.body
        });
       
        post.save(function (err, post) {
            if (err) { return next(err) }
            res.status(201).json(post)
    
        })
    })
    router.post('/api/removePost', function (req, res, next) {
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
module.exports = router;