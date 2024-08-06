const express = require("express");
const router = express.Router();
const ditController = require("../controllers/ditController");

router.get("/user/:id", ditController.getDitByUserId);
router.get("/:id", ditController.getDitById);
router.get("/byac/:id", ditController.getDitByAccountNumber);
router.get("/", ditController.getAllDit);
router.post("/", ditController.createDit);
router.post("/update/:id", ditController.updateDit);
router.post("/delete/:id", ditController.deleteDit);

module.exports = router;
