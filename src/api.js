const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const login = require("./controllers/user");

const tasks = [];

router.use(express.json());

//login user
router.post("/login", login.loginHandler);

router.get("/users", (req, res) => {
  res.json(login.users);
});

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
