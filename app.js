const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Todo:todo123todo@todo.tv0age9.mongodb.net/Todo"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Conection Error");
});

db.once("open", () => {
  console.log("Conected to DB!");
});

app.use(taskRoutes);

app.listen(port, () => {
  console.log(" Server started on port 3000");
});
