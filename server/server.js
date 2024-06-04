if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb.js");
const todoController = require("./controllers/todosControllers.js");
const userController = require("./controllers/userController.js");

const app = express();

app.use(express.json());
app.use(cors());

connectToDb();

// Routing
app.get("/todos", todoController.fetchTodos);

app.get("/todos/:id", todoController.fetchTodo);

app.post("/todos", todoController.createTodo);

app.put("/todos/:id", todoController.updateTodo);

app.delete("/todos/:id", todoController.deleteTodo);

// User Routes
app.get("/users", userController.fetchUsers);

app.get("/user/:id", userController.fetchUser);

app.post("/users", userController.createUser);

app.put("/users/:id", userController.updateUser);

app.delete("/users/:id", userController.deleteUser);

app.listen(process.env.PORT);
