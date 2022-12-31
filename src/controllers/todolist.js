const tasks = [];

const createTask = (req, res) => {
  const { title, description } = req.body;
  const userId = req.body.userId;

  if (tasks.length < 1) {
    tasks.push({ id: 1, userId, title, description, status: false });
  } else {
    tasks.push({ id: tasks[tasks.length - 1].id + 1, userId, title, description, status: false });
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

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.body.userId;
  const { title, description, status } = req.body;

  if (isNaN(id) || tasks.length < 1) {
    return res.status(400).json({ msg: "invalid input" });
  }

  const dataIndex = tasks.findIndex((task) => task.id == id);

  if (tasks[dataIndex].userId != userId || dataIndex == -1) {
    return res.status(401).json({ msg: "you dont hace access to this resource" });
  }

  tasks[dataIndex] = {
    title: title || tasks[dataIndex].title,
    description: description || tasks[dataIndex].description,
    status: status || tasks[dataIndex].status,
  };
  return res.status(201).json({ msg: "data updated!", data: tasks[dataIndex] });
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.body.userId;

  if (isNaN(id) || tasks.length < 1) {
    return res.status(400).json({ msg: "invalid input" });
  }

  const dataIndex = tasks.findIndex((task) => task.id == id);

  if (tasks[dataIndex].userId != userId || dataIndex == -1) {
    return res.status(401).json({ msg: "you dont hace access to this resource" });
  }

  const deletedData = tasks.splice(dataIndex, 1);
  return res.status(201).json({ msg: `Task with id ${deletedData.id} deleted` });
};

module.exports = {
  tasks,
  createTask,
  findTasksByUserId,
  updateTask,
  deleteTask,
};
