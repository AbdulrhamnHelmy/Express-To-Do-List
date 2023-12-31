const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// ======= Get =======
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ======= Post =======
router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(200).json({ message: " Added successfully ", task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ======= Put =======
router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const task = await Task.findByIdAndUpdate(id, dataToUpdate, { new: true });
    res.status(200).json({ message: "Updated Successfully", task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ======= Delete =======
router.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: " Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
