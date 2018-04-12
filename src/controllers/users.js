var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt')
var User = require('../models/user')
var config = require('../../config')

router.get('/api/users', function (req, res, next) {
    if (!req.headers['x-auth']) {
        res.sendStatus(401)
    }
    var auth = jwt.decode(req.headers['x-auth'], config.secret)
    User.findOne({ username: auth.username }, function (err, user) {
        if (err) { return next(err) }
        res.json(user)
    })
});
router.post('/api/users', function (req, res, next) {
    var user = new User({ username: req.body.username })
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) { return next(err) }
        user.password = hash
        user.save(function (err) {
            if (err) { return next(err) }
            res.sendStatus(201)
        })
    })
})
module.exports = router 
