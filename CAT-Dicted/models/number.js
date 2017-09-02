var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var numberSchema = new Schema({
 Name: String,
 Number: String
});

var Number = mongoose.model("Number", numberSchema);

module.exports = Number;