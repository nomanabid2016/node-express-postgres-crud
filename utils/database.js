import { Sequelize } from "sequelize";

// export const pool = new Pool.Pool({
//   user: "me",
//   host: "localhost",
//   database: "api",
//   password: "admin@123",
//   port: 5432,
// });

export const db = new Sequelize("api", "me", "admin@123", {
  host: "localhost",
  dialect: "postgres",
});
