const express = require('express');
const router = express.Router();

// Home Route (Splash Page)
router.get('/', (req, res) => {
  res.render('index', { title: 'Workout Tracker' });
});

module.exports = router;
