const users = [];

module.exports = [
  (req, res) => {
    const { userId } = req.body;
    users.push({ userId });
    return res.status(201).json({ msg: "user created!" });
  },
  users,
];
