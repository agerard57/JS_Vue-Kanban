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

exports.add = (req, res) => {
  const addOptions = {
    title: req.body.title,
    description: req.body.description,
    list: req.body.list,
  };
  console.log(req.body);

  const todo = new TodosModel(addOptions);

  todo
    .save()
    .then((message) => {
      res.json(message);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
};

exports.update = (req, res) => {
  const updateOptions = {
    title: req.body.title,
    description: req.body.description,
    list: req.body.list,
  };
  const findById = { id: req.params.id };

  TodosModel.findOneAndUpdate(findById, updateOptions)
    .then((message) => {
      res.json(message);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
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
