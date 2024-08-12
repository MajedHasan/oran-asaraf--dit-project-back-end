const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.post("/login", userController.loginUser);
router.post("/", userController.createUser);
router.post("/update/:id", userController.updateUser);
router.post("/delete/:id", userController.deleteUser);
router.get("/status/:id", userController.getUserStatusByUserId);
router.post("/status", userController.createUserStatus);
router.post("/status/update/:id", userController.updateUserStatus);

module.exports = router;
