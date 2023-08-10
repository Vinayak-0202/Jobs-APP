const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bycrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bycrypt.genSalt(10); //genrate random bytes by running method genSalt
  const hashPassword = await bycrypt.hash(password, salt);
  const tempUser = { name, email, password: hashPassword };
  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
  res.send("login user ");
};

module.exports = { register, login };
