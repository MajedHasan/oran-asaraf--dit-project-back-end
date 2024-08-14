const db = require("../config/db");

const Dit = {
  getAllDit: async () => {
    const [rows] = await db.query("SELECT * FROM dit_account");
    return rows;
  },

  getDitById: async (id) => {
    const [rows] = await db.query("SELECT * FROM dit_account WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  getDitByAccountNumber: async (acNumber) => {
    const [rows] = await db.query(
      "SELECT * FROM dit_account WHERE account_number = ?",
      [acNumber]
    );
    return rows[0];
  },

  getDitByUserId: async (id) => {
    const [rows] = await db.query("SELECT * FROM dit_account WHERE uid = ?", [
      id,
    ]);
    return rows;
  },

  createDit: async (dit) => {
    const { accountNumber, date, status, amount, uid } = dit;
    const [result] = await db.query(
      "INSERT INTO dit_account (account_number, date, status, amount, uid) VALUES (?, ?, ?, ?, ?)",
      [accountNumber, date, status, amount, uid]
    );
    return result.insertId;
  },

  updateDit: async (id, date) => {
    const { status, amount } = date;
    const [result] = await db.query(
      "UPDATE dit_account SET status = ?, amount = ? WHERE id = ?",
      [status, amount, id]
    );
    return result.affectedRows;
  },

  deleteDit: async (id) => {
    const [result] = await db.query("DELETE FROM dit_account WHERE id = ?", [
      id,
    ]);
    return result.affectedRows;
  },
};

module.exports = Dit;
