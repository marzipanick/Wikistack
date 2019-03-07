const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const layout = require('../views/layout');
const {Page} = require('../models/')

router.get('/', (req, res, next) => {
  res.redirect('../')
  next();
});

router.post('/', (req, res, next) => {
  res.json(req.body);
  next();
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
  next();
});

router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  })
  console.log(req.body.title)

  try {
    await page.save()
    res.redirect('/')
  } catch (error) { next(error)}
})


module.exports = router;
