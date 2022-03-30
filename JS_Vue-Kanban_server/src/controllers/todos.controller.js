const TodosModel = require("../models/todos.model");

exports.getAll = (_req, res) => {
  TodosModel.find().then((todos) => {
    res.json(todos);
  });
};

exports.getOne = (req, res) => {
  const id = req.params.id;
  TodosModel.findOne({ id: id }).then((todos) => {
    res.json(todos);
  });
};

exports.add = (req, _res) => {
  const addOptions = {
    title: req.body.title,
    description: req.body.description,
    list: req.body.list,
  };

  const todo = new TodosModel(addOptions);

  todo.save((err, res) => {
    if (err) res.send(err);
    res.json({
      message: "Added!",
    });
  });
};

exports.update = (req, _res) => {
  const updateOptions = {
    title: req.body.title,
    description: req.body.description,
    list: req.body.list,
  };
  const findById = { id: req.params.id };

  TodosModel.findOneAndUpdate(findById, updateOptions, (_err, res) => {
    if (err) res.send(err);
    res.json({
      message: "Updated!",
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  TodosModel.deleteOne({ id: id }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "Deleted!",
    });
  });
};
