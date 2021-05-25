// const functions = require("firebase-functions");

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
const fetch = require("node-fetch");
const unsplash = require("unsplash-js");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const create_api = unsplash.createApi;
const app = express();
const router = express.Router;
const api = create_api({ accessKey: process.env.ACCESS_KEY, fetch: fetch });

// Creating the web server
app.use(cors());
app.get("/unsplash-proxy&query=:query/:page_on", (req, res) => {
  const query = req.params.query;
  const defined_page_on = req.params.page_on;
  if (query === "get_random_photo") {
    const page_on = Math.floor(Math.random() * 10);
    api.search
      .getPhotos({ query: "beautiful places", page: page_on })
      .then((result) => {
        if (result.type === "success") {
          const photo_index = Math.floor(Math.random() * 10);
          const response = result.response.results[photo_index];
          return res.send(response);
        } else {
          return res.send("error");
        }
      });
  } else if (query === "get_random_places") {
    const page_on = Math.floor(Math.random() * 10);
    api.search
      .getPhotos({ query: "beautiful places", page: page_on })
      .then((result) => {
        if (result.type === "success") {
          const response = result.response.results;
          return res.send(response);
        } else {
          return res.send("error");
        }
      });
  } else {
    api.search
      .getPhotos({ query: query, page: defined_page_on })
      .then((result) => {
        if (result.type === "success") {
          const response = result.response.results;
          return res.send(response);
        } else {
          return res.send("error");
        }
      });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on ${port}...`);
});
