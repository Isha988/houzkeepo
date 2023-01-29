const express = require("express");
const router = express.Router();
const { login, signup, verify } = require("../controller/user");
const {loginValidation, signupValidation} = require("../middleware/userValidation");
const authMiddleware = require("../middleware/auth"); 

router.post("/login", loginValidation, login);
router.post("/signUp", signupValidation, signup);
router.put("/verify", authMiddleware, verify);

module.exports = router;
