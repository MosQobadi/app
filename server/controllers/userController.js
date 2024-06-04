const User = require("../models/user.js");

const fetchUsers = async (req, res) => {
  const users = await User.find();

  res.json({ users });
};

const fetchUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  res.json({ user });
};

const createUser = async (req, res) => {
  // get the todo from req body
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  // create todo with it
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  // response with new note
  res.json({ user });
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  await User.findByIdAndUpdate(userId, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  const user = await User.findById(userId);

  res.json({ user });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  await User.deleteOne({ _id: userId });

  res.json({ success: "User Deleted" });
};

module.exports = {
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
};
