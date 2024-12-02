const express = require("express");
const router = express.Router();

router.use("/", require("./index"));
router.use("/api", require("./api/main"));

module.exports = router;