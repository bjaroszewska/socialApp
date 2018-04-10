var User = require('./user')
var express = require('express')
var jwt = require('jwt-simple')
var _ = require('lodash')
var bcrypt = require('bcrypt')
var app = express()

app.use(require('body-parser').json())
var users = [{username: 'beciaha', password: "$2b$10$oR9hNX.rkUrvou6Kw4S15efDUV6UHND/y12sWUEEkXoYLYZAChWVu" }]
var secretKey = 'supersecretkey'

app.post('/session', function (req, res,next) {
    User.findOne({username: req.body.username}, function(err,user) {
      if(err) {return next(err)}
      if(!user) {return  res.send(401)}
      bcrypt.compare(req.body.password, user.password, function(err, valid) {
          if(err) {return next(err)}
          if(!valid) {return res.send(401)}
          var token = jwt.encode({username: user.username}, secretKey)
          res.json(token)
      })
    })
})

app.get ('/user', function(req,res) {
    var token = req.headers['x-auth']
    var user = jwt.decode(token,secretKey)
      User.findOne({username: auth.username}, function (err,user) {
        res.json(user)
      })
})
app.post ('/user', function (req,res,next) {
var user = new User({ 
    username: req.body.username})
    bcrypt.hash(req.body.username, 10 , function(err,hash) {
        user.password = hash
        user.save(function(err,user) {
            if(err) {throw next(err)}
            res.send(200)
        })
    })
})
app.listen(3000)