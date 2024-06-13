// const { sign } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    await User.create({ email, password: hashedPassword });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.sendStatus(401);
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return res.sendStatus(401);
  }
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
  const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

  // set the cookie
  res.cookie("Authorization", token, {
    expires: new Date(exp),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  res.sendStatus(200);
};

const logout = (req, res) => {
  res.clearCookie("Authorization");
  res.sendStatus(200);
};

const checkAuth = (req, res) => {
  console.log(req.user);
  res.sendStatus(200);
};

module.exports = {
  signup,
  login,
  logout,
  checkAuth,
};

// const User = require("../models/user.js");

// const fetchUsers = async (req, res) => {
//   const users = await User.find();

//   res.json({ users });
// };

// const fetchUser = async (req, res) => {
//   const userId = req.params.id;
//   const user = await User.findById(userId);
//   res.json({ user });
// };

// const createUser = async (req, res) => {
//   // get the todo from req body
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const password = req.body.password;
//   // create todo with it
//   const user = await User.create({
//     firstName,
//     lastName,
//     email,
//     password,
//   });
//   // response with new note
//   res.json({ user });
// };

// const updateUser = async (req, res) => {
//   const userId = req.params.id;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const password = req.body.password;
//   await User.findByIdAndUpdate(userId, {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     password: password,
//   });

//   const user = await User.findById(userId);

//   res.json({ user });
// };

// const deleteUser = async (req, res) => {
//   const userId = req.params.id;

//   await User.deleteOne({ _id: userId });

//   res.json({ success: "User Deleted" });
// };

// module.exports = {
//   fetchUsers,
//   fetchUser,
//   createUser,
//   updateUser,
//   deleteUser,
// };
