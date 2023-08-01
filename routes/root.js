const express = require("express");
const router = express.Router();
const path = require("path");

// ^ -> means starts only with
//  $ -> ends only with
//  | -> or
//  () -> we dont need to give the extension as it will detect automatically
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); // 302 by default thats not a correct permanent redirect status code
});

module.exports = router;
