const db = require("../config/db");

const Inbox = {
  getAllInbox: async () => {
    const [rows] = await db.query("SELECT * FROM inbox");
    return rows;
  },

  getInboxById: async (id) => {
    const [rows] = await db.query("SELECT * FROM inbox WHERE id = ?", [id]);
    return rows[0];
  },

  getInboxByUserId: async (uid) => {
    const [rows] = await db.query("SELECT * FROM inbox WHERE uid = ?", [uid]);
    return rows;
  },

  createInbox: async (inbox) => {
    const { uid, title, description, sendTime, media } = inbox;
    const [result] = await db.query(
      "INSERT INTO inbox (title, description, send_time, uid, media) VALUES (?, ?, ?, ?, ?)",
      [title, description, sendTime, uid, media]
    );
    return result.insertId;
  },

  updateInbox: async (id, inbox) => {
    const { title, description } = inbox;
    const [result] = await db.query(
      "UPDATE inbox SET title = ?, description = ? WHERE id = ?",
      [title, description, id]
    );
    return result.affectedRows;
  },

  deleteInbox: async (id) => {
    const [result] = await db.query("DELETE FROM dit_account WHERE id = ?", [
      id,
    ]);
    return result.affectedRows;
  },
};

module.exports = Inbox;
