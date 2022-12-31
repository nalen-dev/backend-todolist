const router = require("express").Router();
const user = require("../controllers/user");
const middleware = require("../middleware");

router.post("/login", middleware.loginValidation, user.loginHandler);

module.exports = router;
