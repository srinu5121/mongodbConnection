var express= require("express");
var Ninja = require("./ninjaCharacter.js")
var Router = express.Router();

Router.get("/", function(req, res){
  console.log(req.query.id,"sasassa")
Ninja.findById(req.query.id).then(function(ninja){
  console.log(ninja,"ninaaaaaaaaa")
  res.send(ninja)
})
})

Router.post('/', function(req, res){
  console.log("WOrking like we think", req.body)
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja)
  })
})

Router.put('/ninjas/:id', function(req, res){
  Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(ninja){
    console.log("put method and update Compltd", ninja)
    res.send({ninja})
  })
})

Router.delete('/ninjas/:id', function(req, res){
  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
    res.send({ninja})
  })
  console.log("delete method")
})
module.exports = Router;
