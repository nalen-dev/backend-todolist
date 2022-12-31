const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const users = [{ userId: 1, tasks: [] }];

router.get("/user", (req, res) => {
  res.json(users);
});

router.get("/adduser", (req, res) => {
  users.push({ userId: 2, tasks: [] });
  res.json(users);
});

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
