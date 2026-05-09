const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { title, subject, deadline } = req.body;

    if (!title || !subject || !deadline) {
      return res.status(400).json({
        message: "Please provide title, subject, and deadline",
      });
    }

    const task = await Task.create({
      title: title,
      subject: subject,
      deadline: deadline,
      status: "Pending",
      user: req.user._id,
    });

    res.status(201).json({
      message: "Task created successfully",
      task: task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Task creation failed",
      error: error.message,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Tasks fetched successfully",
      count: tasks.length,
      tasks: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, subject, deadline, status } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not allowed to update this task",
      });
    }

    task.title = title || task.title;
    task.subject = subject || task.subject;
    task.deadline = deadline || task.deadline;
    task.status = status || task.status;

    const updatedTask = await task.save();

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Task update failed",
      error: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not allowed to delete this task",
      });
    }

    await task.deleteOne();

    res.status(200).json({
      message: "Task deleted successfully",
      taskId: req.params.id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Task delete failed",
      error: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};