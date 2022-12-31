const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const routers = require("./routes");

const { users } = require("./controllers/user");

router.use(express.json());

router.use(routers);

router.get("/users", (req, res) => {
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
