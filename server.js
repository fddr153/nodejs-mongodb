const config = require("./config.js");

var express = require("express"),
  app = express(),
  port = 8081,
  mongoose = require("mongoose"),
  Giro = require("./models/giros"),
  bodyParser = require("body-parser");
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/girosocupacionvida");
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
var routes = require("./controllers/giroController");
//importing routes
routes(app);
//register the route
app.listen(port);
console.log(
  "Servidor para RESTful API de Giros y Ocupaciones iniciado en puerto: " + port
);
