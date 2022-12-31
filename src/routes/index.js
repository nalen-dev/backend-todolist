const router = require("express").Router();
const user = require("../controllers/user");
const todolist = require("../controllers/todolist");
const middleware = require("../middleware");

// user routes
router.post("/login", middleware.loginValidation, user.loginHandler);

//todolist routes
router.post("/todos", middleware.authentication, middleware.createTaskValidation, todolist.createTask);
router.get("/todos", middleware.authentication, todolist.findTasksByUserId);
router.put("/todos/:id", middleware.authentication, todolist.updateTask);
router.put("/todos/:id", middleware.authentication, todolist.deleteTask);

module.exports = router;
