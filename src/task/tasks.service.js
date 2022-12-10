import { Task } from "./task.model";
await Task.sync({ alter: true });
export const TaskService = {
  create: (task) => Task.create(task),
  single: (field, value) => Task.findOne({ where: { [field]: value } }),
  update: (condition, task) => Task.update(task, { where: condition }),
  list: () => Task.findAll(),
  delete: (field, value) => Task.destroy({ where: { [field]: value } }),
};
