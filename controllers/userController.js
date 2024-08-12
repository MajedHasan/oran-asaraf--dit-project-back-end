const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const findUser = await User.loginUser(req.body);
    res.status(201).json(findUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const result = await User.createUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedRows = await User.updateUser(req.params.id, req.body);
    if (updatedRows) {
      res.json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedRows = await User.deleteUser(req.params.id);
    if (deletedRows) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserStatusByUserId = async (req, res) => {
  try {
    const account_status = await User.getUserStatusByUserId(req.params.id);
    if (account_status) {
      res.json(account_status);
    } else {
      res.status(404).json({ message: "Account Status not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUserStatus = async (req, res) => {
  try {
    const result = await User.createUserStatus(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUserStatus = async (req, res) => {
  try {
    const updatedRows = await User.updateUserStatus(req.params.id, req.body);
    if (updatedRows) {
      res.json({ message: "User Status updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
  getUserStatusByUserId,
  createUserStatus,
  updateUserStatus,
};
