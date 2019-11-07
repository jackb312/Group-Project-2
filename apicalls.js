require("dotenv").config();

const apiKey = process.env.GIANT_BOMB;

// ----------------------------------------------
// Needs to take search query from an input field
// ----------------------------------------------

const axios = require("axios");

async function makePostRequest() {
  var query = "BoTW";
  let res;
  var URL;
  try {
    res = await axios.post(
      (URL =
        "http://www.giantbomb.com/api/search/?api_key=" +
        apiKey +
        "&format=json&query=" +
        query)
    );
    console.log(`Release day: ${res.results[0].expected_release_day}`);
  } catch (err) {
    console.log("error in fetching posts");
    console.log(URL);
  }
}
// console.log(`Status text: ${res.statusText}`);
// console.log(`Request method: ${res.request.method}`);
// console.log(`Path: ${res.request.path}`);

// console.log(`Date: ${res.headers.date}`);
// console.log(`Data: ${res.data}`);

makePostRequest();

//
// $ node post_request.js
//
// Status code: 201
// Status text: Created
// Request method: POST
// Path: /posts
// Date: Mon, 04 Feb 2019 16:54:36 GMT
// Data: [object Object]
//
// This is the output.
