const Inbox = require("../models/inboxModel");

const getAllInbox = async (req, res) => {
  try {
    const inbox = await Inbox.getAllInbox();
    res.json(inbox);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getInboxById = async (req, res) => {
  try {
    const inbox = await Inbox.getInboxById(req.params.id);
    if (inbox) {
      res.json(inbox);
    } else {
      res.status(404).json({ message: "Inbox not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getInboxByUserId = async (req, res) => {
  try {
    const inbox = await Inbox.getInboxByUserId(req.params.id);
    if (inbox) {
      res.json(inbox);
    } else {
      res.status(404).json({ message: "Inbox not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createInbox = async (req, res) => {
  try {
    const newInboxId = await Inbox.createInbox(req.body);
    console.log(newInboxId);
    res.status(201).json({ id: newInboxId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateInbox = async (req, res) => {
  try {
    const updatedRows = await Inbox.updateInbox(req.params.id, req.body);
    if (updatedRows) {
      res.json({ message: "Inbox updated successfully" });
    } else {
      res.status(404).json({ message: "Inbox not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteInbox = async (req, res) => {
  try {
    const deletedRows = await Inbox.deleteInbox(req.params.id);
    if (deletedRows) {
      res.json({ message: "Inbox deleted successfully" });
    } else {
      res.status(404).json({ message: "Inbox not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllInbox,
  getInboxById,
  getInboxByUserId,
  createInbox,
  updateInbox,
  deleteInbox,
};
