const express = require('express');
const fs = require('node:fs');
const app = express();
const port = 3000;

app.use(express.json());

let html = fs.readFileSync(__dirname + '/index.html', 'utf8');

app.get('/', (req, res) => {
  res.send(html);
});

app.post('/produtos', (req, res) => {
    console.log(req.body);
    res.send({});
});


app.post('/users', (req, res) => {
    let data = JSON.stringify(req.body);
    
    let fileContent = fs.readFileSync(__dirname + '/users.json', 'utf8');
    fileContent = JSON.parse(fileContent);
    fileContent.push(req.body);

    fs.writeFileSync(__dirname + '/users.json', JSON.stringify(fileContent));
    
    res.status(201);
    res.send({
        error: false,
        message: 'Usuário criado com sucesso'
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});