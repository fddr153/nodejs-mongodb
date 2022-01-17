"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var GiroSchema = new Schema({
  _id: String,
  descripcion: String,
  ocupaciones: [{ _id: String, descripcion: String }],
});

module.exports = mongoose.model("Giro", GiroSchema, "giros");
