const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the REST API project!' });
});

module.exports = router;