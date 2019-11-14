// ----------------------------------------------
// Needs to take search query from an input field
// ----------------------------------------------
var express = require("express");
var router = express.Router();
var request = require("request");
var db = require("../models");

router.get('/', function(req, res) {
  console.log(db.usergames);
  
  db.usergames.findAll({
      order: [['guid', 'ASC']]
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
/*router.get('/rating', function(req, res) {
  db.userGames.findAll({
      order: 'game_rating DESC'
  }).then(function(data) {
      var hbsObject = {
          games: data
      };
      res.render('index', hbsObject);
  });
});
router.get('/platform', function(req, res) {
  db.userGames.findAll({
      order: 'platform DESC'

  }).then(function(data) {
      var hbsObject = {
          games: data
      };
      res.render('index', hbsObject);
  });
});*/
router.post("/api/new/game", function(req, res){
  var game = req.body.name;
  var queryURL = "https://www.giantbomb.com/api/search/?api_key=f849b1f445d9804d97aafaf0673137415110e288&format=json&query="+game+"&resoureces=game"
  request(queryURL, function(error, response, body) {
    if (!error && JSON.parse(body).Response !== 'False') {
      console.log(JSON.parse(body));
      request(options, function(error, response, result) {
        if (error) res.redirect('/');
        if (!JSON.parse(result).results) {
            res.redirect('/')
        } else {
          db.usergames.create({
            game: JSON.parse(body).name,
            /*platform: JSON.parse(body).Platform,
            game_image: JSON.parse(body).Image,
            game_release: JSON.parse(body).Release,
            game_rating: JSON.parse(body).Ratings[0].Value*/
      }).then(function(){

        res.redirect("/");

      }).catch(function(err){
        res.sendStatus(500);
        console.log(err);
      });
    }
  });
  }else{
    console.log("UH-OH...Something went wrong with your game search, please try again...");
    res.redirect("/");
    }
});
});
router.put("/api/new/played/:id", function(req, res){
  var played = true;
  var ID = req.params.id;
  db.userGames.update({
    played: played,
  }, {where: {id: ID}
  }).then(function(){
    res.redirect("/");
  });
});
router.put("/:id", function(req, res){
  var played = false;
  var ID = req.params.id;
  db.userGames.update({
    played: played,
  }, {where: {id: ID}
  }).then(function(){
    res.redirect("/");
  });
});
router.delete("/api/new/delete/:id", function(req, res){
  var ID = req.params.id;
  db.userGames.destroy({
    where: {id: ID}
  }).then(function(){
    res.redirect("/");
  });
});
/*require("dotenv").config();
const apiKey = process.env.GIANT_BOMB;
const axios = require("axios");
var fs = require("fs");

var search = function() {
  async function makePostRequest() {
    var query = "breath+of+the+wild";
    var plats = [];
    let res;
    try {
      res = await axios.post(
        "http://www.giantbomb.com/api/search/?api_key=" +
          apiKey +
          "&format=json&query=" +
          query
      );
      for (var i = 0; i < res.data.results[0].platforms.length; i++) {
        plats.push(res.data.results[0].platforms[i]);
      }
      return {
        gameTitle: res.data.results[0].image_tags.name,
        rating: res.data.results[0].original_game_rating[0].name,
        releaseDate:
          res.data.results[0].expected_release_month +
          "/" +
          res.data.results[0].expected_release_day +
          "/" +
          res.data.results[0].expected_release_year,
        platforms: plats,
        image: res.data.results[0].image.original_url
      };

      // console.log(`Release day: ${res.results[0].expected_release_day}`);
    } catch (err) {
      console.log("error in fetching posts");
      console.log(err);
    }
  }
};*/

module.exports = router;
