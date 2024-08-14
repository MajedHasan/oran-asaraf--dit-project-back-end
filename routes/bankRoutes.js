const express = require("express");
const router = express.Router();
const bankController = require("../controllers/bankController");

router.get("/user/:id", bankController.getBankByUserId);
router.get("/:id", bankController.getBankById);
router.get("/", bankController.getAllBank);
router.post("/", bankController.createBank);
router.post("/update/:id", bankController.updateBank);
router.post("/delete/:id", bankController.deleteBank);

module.exports = router;
