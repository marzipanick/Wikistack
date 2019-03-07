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
app.use('/user', require('./routes/user'));
app.use('/wiki', require('./routes/wiki'));

app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 3000;

const init = async () => {
  try {
    await db.sync({ force: true });
    // await db.page.sync()
  } catch (error) {
    console.error(error.message);
  }
  app.listen(3000, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
  });
};

init();
