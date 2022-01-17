"use strict";
module.exports = function (app) {
  var giro = require("../services/giroService");
  app.route("/girosocupaciones").get(giro.ListarTodosLosGiros);
  app.route("/giros").get(giro.ListarSoloLosGiros);
};
