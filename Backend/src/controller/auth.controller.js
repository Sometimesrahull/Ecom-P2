const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const {
    username,
    email,
    fullname: { firstName, lastName },
    password,
  } = req.body;

  const isUserAlreadyPresent = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (isUserAlreadyPresent) {
    return res.status(422).json({
      message:
        isUserAlreadyPresent.username === username
          ? "Username is already taken"
          : "Email is already registered",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const userOne = await userModel.create({
    username,
    email,
    fullname: { firstName, lastName },
    password: hashedPassword,
  });
  const token = jwt.sign(
    {
      id: userOne._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User registered successfully",
    userOne: {
      id: userOne._id,
      username: userOne.username,
      email: userOne.email,
      fullname: userOne.fullname,
      password: userOne.password, 
    },
  });
}
async function login(req, res) {
  const { username, email, password } = req.body;
  const userOne = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (!userOne) {
    return res.status(400).json({
      message: "Better To Register First",
    });
  }
  const isYourPasswordCorrect = await bcrypt.compare(
    password,
    userOne.password
  );
  if (!isYourPasswordCorrect) {
    return res.status(400).json({
      message: "better to remember your password  again,",
    });
  }
  const token = jwt.sign(
    {
      id: userOne._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "User logged in successfully",
    userOne: {
      id: userOne._id,
      username: userOne.username,
      email: userOne.email,
      fullname: userOne.fullname,
    },
  });
}
module.exports = { register, login };
