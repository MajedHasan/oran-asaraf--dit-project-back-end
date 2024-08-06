const Transaction = require("../models/transactionModel");

const getAllTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.getAllTransaction();
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.getTransactionById(req.params.id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTransactionByUserId = async (req, res) => {
  try {
    const transaction = await Transaction.getTransactionByUserId(req.params.id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTransaction = async (req, res) => {
  try {
    const newTransactionId = await Transaction.createTransaction(req.body);
    res.status(201).json({ id: newTransactionId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const updatedRows = await Transaction.updateTransaction(
      req.params.id,
      req.body
    );
    if (updatedRows) {
      res.json({ message: "Transaction updated successfully" });
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const deletedRows = await Transaction.deleteTransaction(req.params.id);
    if (deletedRows) {
      res.json({ message: "Transaction deleted successfully" });
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTransaction,
  getTransactionById,
  getTransactionByUserId,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
