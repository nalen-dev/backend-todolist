const tasks = [];

const createTask = (req, res) => {
  const { title, description } = req.body;
  const _id = req.body._id;

  if (tasks.length < 1) {
    tasks.push({ id: 1, userId: _id, title, description });
  } else {
    tasks.push({ id: tasks[tasks.length - 1].id + 1, userId: _id, title, description });
  }
  return res.status(201).json({ msg: "new task created!" });
};

module.exports = {
  tasks,
  createTask,
};
