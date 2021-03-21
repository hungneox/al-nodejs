const express = require('express');
const router = express.Router();

// API ping route.
router.get('/api/ping', function (req, res) {
  res.send('OK');
});

module.exports = router;
