const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About Me Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Projects Page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Contact Me Page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
ports = router;
