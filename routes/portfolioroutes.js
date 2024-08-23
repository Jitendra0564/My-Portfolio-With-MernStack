const express = require("express");
const { sendEmailController } = require("../controller/portfoliocontroller.js");

const router = express.Router();

router.post("/sendEmail", sendEmailController);

module.exports = router;
