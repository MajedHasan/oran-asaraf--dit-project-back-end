const express = require("express");
const router = express.Router();
const inboxController = require("../controllers/inboxController");

router.get("/user/:id", inboxController.getInboxByUserId);
router.get("/:id", inboxController.getInboxById);
router.get("/", inboxController.getAllInbox);
router.post("/", inboxController.createInbox);
router.post("/update/:id", inboxController.updateInbox);
router.post("/delete/:id", inboxController.deleteInbox);

module.exports = router;
