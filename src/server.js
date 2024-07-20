const express = require('express');
const fs = require('node:fs');
const app = express();
const port = 3000;

const UserController = require('./Controllers/Users');

app.use(express.json());

app.get('/', (req, res) => {
let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  res.send(html);
});

app.post('/users', UserController)

app.listen(port);