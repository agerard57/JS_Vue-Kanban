const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    id: { type: Number, default: Date.now() }, // Date.now as id is a clever way to se unique identifiers
    title: { type: String, required: true },
    description: { type: Array, required: true },
    list: {
      type: String,
      required: true,
      default: "TO-DO",
      get: (list) => list.toUpperCase(),
    },
  },
  { toJSON: { getters: true } }
);

TaskSchema.index({ id: 1 }, { unique: true });

const TaskModel = mongoose.model("tasks", TaskSchema);

module.exports = TaskModel;
