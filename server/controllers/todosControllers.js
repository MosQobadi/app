const Todo = require("../models/todo.js");

const fetchTodos = async (req, res) => {
  const todos = await Todo.find();

  res.json({ todos });
};

const fetchTodo = async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId);
  res.json({ todo });
};

const createTodo = async (req, res) => {
  // get the todo from req body
  const title = req.body.title;
  const body = req.body.body;
  // create todo with it
  const todo = await Todo.create({
    title,
    body,
  });
  // response with new note
  res.json({ todo });
};

const updateTodo = async (req, res) => {
  const todoId = req.params.id;
  const title = req.body.title;
  const body = req.body.body;
  await Todo.findByIdAndUpdate(todoId, {
    title: title,
    body: body,
  });

  const todo = await Todo.findById(todoId);

  res.json({ todo });
};

const deleteTodo = async (req, res) => {
  const todoId = req.params.id;

  await Todo.deleteOne({ _id: todoId });

  res.json({ success: "Todo Deleted" });
};

module.exports = {
  fetchTodos,
  fetchTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
