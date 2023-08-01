const express = require("express");
const router = express.Router();
const path = require("path");

// ^ -> means starts only with
//  $ -> ends only with
//  | -> or
//  () -> we dont need to give the extension as it will detect automatically
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "index.html"));
});

router.get("/test(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "test.html"));
});

module.exports = router;
