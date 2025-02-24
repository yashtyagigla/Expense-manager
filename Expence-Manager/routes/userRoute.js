const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//create router instance 
const router = express.Router();

//router
// POST || LOGIN USER REQUEST
router.post("/login", loginController);

//POST || REGISTER USER REQUEST
router.post("/register", registerController);

module.exports = router;
