const Bank = require("../models/bankModel");

const getAllBank = async (req, res) => {
  try {
    const bank = await Bank.getAllBank();
    res.json(bank);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBankById = async (req, res) => {
  try {
    const bank = await Bank.getBankById(req.params.id);
    if (bank) {
      res.json(bank);
    } else {
      res.status(404).json({ message: "Bank not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBankByUserId = async (req, res) => {
  try {
    const bank = await Bank.getBankByUserId(req.params.id);

    if (bank) {
      res.json(bank);
    } else {
      res.status(404).json({ message: "Bank not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createBank = async (req, res) => {
  try {
    const newBank = await Bank.createBank(req.body);
    console.log(newBank);
    res.status(201).json({ id: newBank });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateBank = async (req, res) => {
  try {
    const updatedRows = await Bank.updateBank(req.params.id, req.body);
    if (updatedRows) {
      res.json({ message: "Bank updated successfully" });
    } else {
      res.status(404).json({ message: "Bank not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBank = async (req, res) => {
  try {
    const deletedRows = await Bank.deleteBank(req.params.id);
    if (deletedRows) {
      res.json({ message: "Bank deleted successfully" });
    } else {
      res.status(404).json({ message: "Bank not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllBank,
  getBankById,
  getBankByUserId,
  createBank,
  updateBank,
  deleteBank,
};
