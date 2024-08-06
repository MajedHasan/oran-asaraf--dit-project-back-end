const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

router.get("/user/:id", transactionController.getTransactionByUserId);
router.get("/:id", transactionController.getTransactionById);
router.get("/", transactionController.getAllTransaction);
router.post("/", transactionController.createTransaction);
router.post("/update/:id", transactionController.updateTransaction);
router.post("/delete/:id", transactionController.deleteTransaction);

module.exports = router;
