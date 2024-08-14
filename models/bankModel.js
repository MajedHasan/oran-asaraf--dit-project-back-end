const db = require("../config/db");

const Bank = {
  getAllBank: async () => {
    const [rows] = await db.query("SELECT * FROM bank_details");
    return rows;
  },

  getBankById: async (id) => {
    const [rows] = await db.query("SELECT * FROM bank_details WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  getBankByUserId: async (uid) => {
    const [rows] = await db.query("SELECT * FROM bank_details WHERE uid = ?", [
      uid,
    ]);

    return rows[0];
  },

  createBank: async (inbox) => {
    const { uid, bank_name, swift_code, iban, account_holder_name } = inbox;
    const [result] = await db.query(
      "INSERT INTO bank_details (uid, bank_name, swift_code, iban, account_holder_name) VALUES (?, ?, ?, ?, ?)",
      [uid, bank_name, swift_code, iban, account_holder_name]
    );
    return result.insertId;
  },

  updateBank: async (id, inbox) => {
    const { bank_name, swift_code, iban, account_holder_name } = inbox;
    const [result] = await db.query(
      "UPDATE bank_details SET bank_name = ?, swift_code = ?, iban = ? account_holder_name = ? WHERE id = ?",
      [bank_name, swift_code, iban, account_holder_name, id]
    );
    return result.affectedRows;
  },

  deleteBank: async (id) => {
    const [result] = await db.query("DELETE FROM bank_details WHERE id = ?", [
      id,
    ]);
    return result.affectedRows;
  },
};

module.exports = Bank;
