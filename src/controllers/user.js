const jwt = require("jsonwebtoken");

const users = [];

const loginHandler = (req, res, next) => {
  const { userId } = req.body;

  const token = jwt.sign({ userId }, "secretkey");

  const checkUser = users.find((user) => user.userId == userId);

  if (checkUser == undefined) {
    users.push({ userId });
    return res.status(201).json({ msg: "new user created!", token });
  }
  return res.status(200).json({ msg: "login success", token });
};

module.exports = { loginHandler, users };
