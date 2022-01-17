"use strict";

const json = require("body-parser/lib/types/json");

var mongoose = require("mongoose"),
  Giro = mongoose.model("Giro");

exports.ListarTodosLosGiros = function (req, res) {
  Giro.find({}, function (err, giro) {
    if (err) res.send(err);
    var aux = JSON.stringify(giro).replaceAll("_id", "clave");
    res.send(JSON.parse(aux));
  });
};
exports.ListarSoloLosGiros = function (req, res) {
  Giro.find({}, "_id, descripcion", function (err, giro) {
    if (err) res.send(err);
    var aux = JSON.stringify(giro).replaceAll("_id", "clave");
    res.send(JSON.parse(aux));
  });
};
