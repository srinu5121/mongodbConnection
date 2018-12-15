var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Geoninja = new Schema({
  type: {
    type:String,
    default:"Point"
  },
  coordinates: {
    type: [Number],
    index: "2dSphere",
    required : [true, "coord required"]
  }
})
var ninjaChar = new Schema({
  name: {
    type: String,
    required :[true, "name is req"]
  },
  id:Number,
  rank: String,
  geometry : Geoninja
})

var ninjaModel = mongoose.model("ninjaChar", ninjaChar);

module.exports = ninjaModel;
