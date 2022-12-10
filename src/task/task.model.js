import { db } from "../../utils/database";
import { Sequelize } from "sequelize";

export const Task = db.define("task", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: { type: Sequelize.STRING, allowNull: false },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});
