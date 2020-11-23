const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('dummy server for travis');
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;