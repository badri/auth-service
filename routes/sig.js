const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get("/", function (req, res, next) {
  console.log('signature')
  res.writeHead(200, {
    "Content-Type": "application/octet-stream",
  });
  fs.createReadStream('/manifest/manifest.json.gpg').pipe(res);
});

module.exports = router;
