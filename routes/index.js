const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/days", require("../controllers/days"));
router.use("/expenses", require("../controllers/expenses"));

module.exports = router;
