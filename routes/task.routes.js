import { Router } from "express";
import {
  createTask,
  listTasks,
  getSingleTask,
  deleteTask,
  updateTask,
} from "../src/task/tasks.controller";
const router = Router();

router.get("/", listTasks);
router.post("/", createTask);
router.get("/:task", getSingleTask);
router.patch("/:task", updateTask);
router.delete("/:task", deleteTask);

export const taskRoutes = router;
