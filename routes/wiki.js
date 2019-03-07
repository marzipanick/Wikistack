const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const layout = require('../views/layout');

router.get('/', (req, res, next) => {
  res.redirect('/wiki');
  next();
});

router.post('/', (req, res, next) => {
  res.send('New page to db');
  next();
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
  next();
});
module.exports = router;
