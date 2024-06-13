if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb.js");
const todoController = require("./controllers/todosControllers.js");
const userController = require("./controllers/userController.js");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middleware/requireAuth.js");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

connectToDb();

//Todos Routing
app.get("/todos", todoController.fetchTodos);
app.get("/todos/:id", todoController.fetchTodo);
app.post("/todos", todoController.createTodo);
app.put("/todos/:id", todoController.updateTodo);
app.delete("/todos/:id", todoController.deleteTodo);

// New Users Routing
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/logout", userController.logout);
app.get("/check-auth", requireAuth, userController.checkAuth);

// Users Routes
// app.get("/users", userController.fetchUsers);
// app.get("/user/:id", userController.fetchUser);
// app.post("/users", userController.createUser);
// app.put("/users/:id", userController.updateUser);
// app.delete("/users/:id", userController.deleteUser);

app.listen(process.env.PORT);
