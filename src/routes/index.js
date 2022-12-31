const router = require("express").Router();
const user = require("../controllers/user");
const todolist = require("../controllers/todolist");
const middleware = require("../middleware");

// user routes
router.post("/login", middleware.loginValidation, user.loginHandler);

//todolist routes
router.post("/todos", middleware.authentication, middleware.createTaskValidation, todolist.createTask);

module.exports = router;
