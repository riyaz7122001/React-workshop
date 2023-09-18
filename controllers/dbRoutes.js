// const db = require("../database/db");
// const User = db.User;
const { User, sequelize } = require("../models/user");

const createUser = async (req, res) => {
  try {
    const createUser = await User.create({
      id: 4,
      firstName: "soha",
      lastName: "shaikh",
      email: "soha@gmail.com",
    });
    console.log(createUser.dataValues);
    return res.status(200).json({
      success: true,
      message: "User created successfully!",
      user: createUser,
    });
  } catch (error) {
    return res.status(500).json({ success: true, message: error.toString() });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json({
      success: true,
      message: "User created successfully!",
      users: users,
    });
  } catch (error) {
    return res.status(500).json({ success: true, message: error.toString() });
  }
};

module.exports = { createUser, getUsers };
// delete from "Riyazs" where id =4; select * from "Riyazs";
