const tasks = [];

const createTask = (req, res) => {
  const { title, description } = req.body;
  const userId = req.body.userId;

  if (tasks.length < 1) {
    tasks.push({ id: 1, userId, title, description });
  } else {
    tasks.push({ id: tasks[tasks.length - 1].id + 1, userId, title, description });
  }
  return res.status(201).json({ msg: "new task created!" });
};

const findTasksByUserId = (req, res) => {
  const userId = req.body.userId;
  const data = tasks.filter((task) => task.userId == userId);

  if (data.length < 0) {
    return res.status(200).json({ msg: "No task yet!" });
  }

  return res.status(200).json({ data });
};

module.exports = {
  tasks,
  createTask,
  findTasksByUserId,
};
