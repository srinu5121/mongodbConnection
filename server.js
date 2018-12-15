var express = require("express");
var bodyParser = require("body-parser")
var routes =  require('./Routes/routes');
var mongoose = require("mongoose");
var app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/Ninjagoo",  { useNewUrlParser: true });
 app.use('/api', routes);

app.listen(4000, function(){
  console.log("Let gets Started");
});


// mongoose.connection.once("open", function(){
//   console.log("connection has been made...!")
// }).on("error", function(error){
//   console.log("connection :", error)
// })
