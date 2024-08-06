const db = require("../config/db");

const User = {
  getAllUsers: async () => {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  },

  getUserById: async (id) => {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  },

  loginUser: async (user) => {
    const { email, password } = user;
    const [result] = await db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );
    return result;
  },

  createUser: async (user) => {
    const {
      accountType,
      title,
      firstName,
      lastName,
      email,
      mobile,
      day,
      month,
      year,
      country,
      address,
      postCode,
      password,
      role,
      status,
    } = user;
    const [result] = await db.query(
      "INSERT INTO users (title, first_name, last_name, email, mobile, day, month, year, country, address, post_code, password, account_type, status, role ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        title,
        firstName,
        lastName,
        email,
        mobile,
        day,
        month,
        year,
        country,
        address,
        postCode,
        password,
        accountType,
        status,
        role,
      ]
    );
    return result.insertId;
  },

  updateUser: async (id, user) => {
    console.log(id, user);

    const {
      accountType,
      title,
      firstName,
      lastName,
      email,
      mobile,
      day,
      month,
      year,
      country,
      address,
      postCode,
      password,
      status,
    } = user;
    const [result] = await db.query(
      "UPDATE users SET title = ?, first_name = ?, last_name = ?, email = ?, mobile = ?, day = ?, month = ?, year = ?, country = ?, address = ?, post_code = ?, password = ?, account_type = ?, status = ? WHERE id = ?",
      [
        title,
        firstName,
        lastName,
        email,
        mobile,
        day,
        month,
        year,
        country,
        address,
        postCode,
        password,
        accountType,
        status,
        id,
      ]
    );
    return result.affectedRows;
  },

  deleteUser: async (id) => {
    const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
    return result.affectedRows;
  },
};

module.exports = User;
