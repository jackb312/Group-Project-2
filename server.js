require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
require("./routes/apiRoutes")(app); 
require("./routes/htmlRoutes")(app);
/* var apiRoutes = require("./routes/apiRoutes.js"); 
apiRoutes(app); */
// var routes = require('./controllers/game_controllers.js');
// app.use('/', routes);
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
