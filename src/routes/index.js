const router = require("express").Router();
const user = require("../controllers/user");

router.post("/login", user.loginHandler);

module.exports = router;
