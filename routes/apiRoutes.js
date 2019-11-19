var db = require("../models");
var giantAPI = require("../helpers/giantAPI.js")

module.exports = function(app) {
  // Get all examples
  app.get("/api/usergames", function(req, res) {
    db.usergames.findAll({}).then(function(dbusergames) {
      res.json(dbusergames);
    });
  });
  
  app.get("/api/usergames/:id", function(req, res) {
    db.usergames.findAll({ where: { id: req.params.id } }).then(function(dbusergames) {
      res.json(dbusergames);
    });
  });
  
  // Create a new example
  app.post("/api/usergames", function(req, res) {
    db.usergames.create(req.body).then(function(dbusergames) {
      res.json(dbusergames);
    });
  });

// Delete an example by id
  app.delete("/api/usergames/:id", function(req, res) {
    db.usergames.destroy({ where: { id: req.params.id } }).then(function(dbusergames) {
      res.json(dbusergames);
    });
  }); 

  app.post("/api/giantbomb/search", async function(req, res) {
   var results = await giantAPI(req.body.searchTerm);
    res.json(results);
  })
};
