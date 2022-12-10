import { TaskService } from "./tasks.service";
// import { pool } from "../../utils/database";

export const createTask = async (req, res) => {
  try {
    await TaskService.create(req.body);
    return res.send({
      success: true,
      message: "Task created successfully",
    });
  } catch (err) {
    return res.status(400).send({
      message: "Something went wrong",
      success: false,
      error: err.message,
    });
  }
};

export const listTasks = async (req, res) => {
  try {
    const tasks = await TaskService.list([]);
    return res.send({
      success: true,
      data: tasks,
    });
  } catch (err) {
    return res.status(400).send({
      message: "Something went wrong",
      success: false,
      error: err.message,
    });
  }
};

export const getSingleTask = async (req, res) => {
  try {
    const task = await TaskService.single("id", req.params.task);
    return res.send({ success: true, message: "Get single task", data: task });
  } catch (err) {
    res.status(400).send({
      message: "Something went wrong",
      success: false,
      error: err.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await TaskService.delete("id", req.params.task);
    return res.send({ success: true, message: "Task deleted successfully" });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", success: false });
  }
};

export const updateTask = async (req, res) => {
  try {
    await TaskService.update({ id: req.params.task }, req.body);
    return res.send({ success: true, message: "Task updated successfully" });
  } catch (err) {
    return res.status(400).send({
      message: "Something went wrong",
      success: false,
      error: err.message,
    });
  }
};
