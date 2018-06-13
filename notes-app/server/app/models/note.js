var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
  title: String,
  description: String,
  tags: Array
});

module.exports = mongoose.model("note", noteSchema);
