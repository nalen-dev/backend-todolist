const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const login = require("./controllers/login");

const tasks = [];

router.use(express.json());

//login user
router.post("/login", login[0]);

router.get("/users", (req, res) => {
  res.json(login[1]);
});

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
