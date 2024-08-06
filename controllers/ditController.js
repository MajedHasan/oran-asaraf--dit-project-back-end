const Dit = require("../models/ditModel");

const getAllDit = async (req, res) => {
  try {
    const dit = await Dit.getAllDit();
    res.json(dit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDitById = async (req, res) => {
  try {
    const dit = await Dit.getDitById(req.params.id);
    if (dit) {
      res.json(dit);
    } else {
      res.status(404).json({ message: "Dit not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDitByAccountNumber = async (req, res) => {
  try {
    const dit = await Dit.getDitByAccountNumber(req.params.id);
    if (dit) {
      res.json(dit);
    } else {
      res.status(404).json({ message: "Dit not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDitByUserId = async (req, res) => {
  try {
    const dit = await Dit.getDitByUserId(req.params.id);
    if (dit) {
      res.json(dit);
    } else {
      res.status(404).json({ message: "Dit not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createDit = async (req, res) => {
  try {
    const newDitId = await Dit.createDit(req.body);
    res.status(201).json({ id: newDitId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateDit = async (req, res) => {
  try {
    const updatedRows = await Dit.updateDit(req.params.id, req.body);
    if (updatedRows) {
      res.json({ message: "Dit updated successfully" });
    } else {
      res.status(404).json({ message: "Dit not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteDit = async (req, res) => {
  try {
    const deletedRows = await Dit.deleteDit(req.params.id);
    if (deletedRows) {
      res.json({ message: "Dit deleted successfully" });
    } else {
      res.status(404).json({ message: "Dit not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllDit,
  getDitById,
  getDitByAccountNumber,
  getDitByUserId,
  createDit,
  updateDit,
  deleteDit,
};
