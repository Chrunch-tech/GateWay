const functions = require("firebase-functions");
const fetch = require("node-fetch");
const unsplash = require("unsplash-js");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const createApi = unsplash.createApi;
const app = express();
const api = createApi({ accessKey: process.env.ACCESS_KEY, fetch: fetch });

// Creating the web server
app.use(cors());
app.get("/unsplash-proxy&query=:query/:pageOn", (req, res) => {
  const query = req.params.query;
  const definedPageNum = req.params.pageOn;
  if (query === "get_random_photo") {
    const pageOn = Math.floor(Math.random() * 10);
    api.search
      .getPhotos({ query: "beautiful places", page: pageOn })
      .then((result) => {
        if (result.type === "success") {
          const photoIndex = Math.floor(Math.random() * 10);
          const response = result.response.results[photoIndex];
          return res.send(response);
        } else {
          return res.send("error");
        }
      });
  } else if (query === "get_random_places") {
    const pageOn = Math.floor(Math.random() * 10);
    api.search
      .getPhotos({ query: "beautiful places", page: pageOn })
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
      .getPhotos({ query: query, page: definedPageNum })
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

exports.firebase_backend = functions.https.onRequest(app);
