const express = require("express");
const router = express.Router();
const fs = require('fs');

router.post("/", function (req, res) {
  console.log(req.body)
  console.log(JSON.stringify(req.headers))
  res.end("sentinel")
});

module.exports = router;
