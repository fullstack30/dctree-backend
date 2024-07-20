const express = require('express');
const fs = require('node:fs');
const app = express();
const port = 3000;

let html = fs.readFileSync(__dirname + '/index.html', 'utf8');

app.get('/', (req, res) => {
  res.send(html);
})

app.post('/produtos', (req, res) => {
    console.log(req.params);
    res.send('Listagem de produtos');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});