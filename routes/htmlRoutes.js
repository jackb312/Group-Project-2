var db = require("../models");

module.exports = function(app) {
  app.get('/', function(req, res) {
  console.log(db.usergames);
  
  db.usergames.findAll({
      order: [['rating', 'ASC']]
  }).then(function(data) {
      var hbsObject = {
          games: data
      };
      res.render('index', hbsObject);
  }).catch(function(err){
    console.log(err);
    res.sendStatus(500);
  });
});
  // Load index page
/*   app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  }); */

/*   // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  }); */

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
