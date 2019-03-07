const express = require('express');
const app = express();
const sequelize = require('sequelize');
const html = require('html-template-tag');
const layout = require('./views/layout');
const { db } = require('./models');

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
