const mongoose = require("mongoose");

const TodosSchema = mongoose.Schema(
  {
    id: { type: Number, default: Date.now() }, // Date.now as id is a clever way to se unique identifiers
    title: { type: String, required: true },
    description: { type: String, required: true },
    list: {
      type: String,
      required: true,
      default: "TO-DO",
      get: (list) => list.toUpperCase(),
    },
  },
  { toJSON: { getters: true } }
);

TodosSchema.index({ id: 1 }, { unique: true });

const TodosModel = mongoose.model("todos", TodosSchema);

module.exports = TodosModel;
