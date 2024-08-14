const db = require("../config/db");

const Transaction = {
  getAllTransaction: async () => {
    const [rows] = await db.query("SELECT * FROM transactions");
    return rows;
  },

  getTransactionById: async (id) => {
    const [rows] = await db.query("SELECT * FROM transactions WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  getTransactionByUserId: async (id) => {
    const [rows] = await db.query("SELECT * FROM transactions WHERE uid = ?", [
      id,
    ]);
    return rows;
  },

  createTransaction: async (transaction) => {
    const {
      reference,
      companyName,
      iban,
      accountNumber,
      amount,
      date,
      bankBranch,
      address,
      status,
      uid,
    } = transaction;
    const [result] = await db.query(
      "INSERT INTO transactions (reference, company_name, iban, account_number, amount, date, bank_branch, address, status, uid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        reference,
        companyName,
        iban,
        accountNumber,
        amount,
        date,
        bankBranch,
        address,
        status,
        uid,
      ]
    );
    return result.insertId;
  },

  updateTransaction: async (id, user) => {
    const { status, withdrawal } = user;
    const [result] = await db.query(
      "UPDATE transactions SET status = ?, withdrawal = ? WHERE id = ?",
      [status, withdrawal, id]
    );
    return result.affectedRows;
  },

  deleteTransaction: async (id) => {
    const [result] = await db.query("DELETE FROM transactions WHERE id = ?", [
      id,
    ]);
    return result.affectedRows;
  },
};

module.exports = Transaction;
