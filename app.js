import express from "express";
import { db } from "./utils/database";
import { taskRoutes } from "./routes";

const app = express();
app.use(express.json());
db.authenticate()
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((error) => {
    console.log("error connecting db " + error.message);
  });

app.use("/tasks", taskRoutes);

app.use("/", (req, res) => {
  return res.status(404).send({ success: false, message: "Page not found" });
});

db.sync()
  .then(() => {
    app.listen(3001, console.log(`Server started on port 3001`));
  })
  .catch((err) => console.log("Error: " + err));
