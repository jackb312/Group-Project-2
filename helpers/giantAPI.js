require("dotenv").config();
const apiKey = process.env.GIANT_BOMB;
const axios = require("axios");
var fs = require("fs");

  async function makePostRequest(query) {
  //var query;
    //query = "breath+of+the+wild";
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
        plats.push(res.data.results[0].platforms[i].name);
      }
      //console.log(test);
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
    } catch (err) {
      console.log("error in fetching posts");
      console.log(err);
    }
  }

module.exports = makePostRequest;