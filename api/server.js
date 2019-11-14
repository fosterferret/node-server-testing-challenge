const express = require("express");
const countries = require("../countries/countries-models");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Lambda's School Node Server Testing Challenge!"
  });
});

server.get("/countries", (req, res) => {
  countries
    .getAll()
    .then(countries => {
      res.status(200).json(countries);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = server;
