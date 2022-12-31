const jwt = require("jsonwebtoken");

const users = [];

const loginHandler = (req, res, next) => {
  const { userId } = req.body;

  const token = jwt.sign({ userId }, "secretkey");

  users.push({ userId });
  return res.status(201).json({ msg: "user created!", token });
};

module.exports = { loginHandler, users };
