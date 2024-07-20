
module.exports = (req, res) => {
    let fileContent = fs.readFileSync(__dirname + '/users.json', 'utf8');
    fileContent = JSON.parse(fileContent);
    fileContent.push(req.body);

    fs.writeFileSync(__dirname + '/users.json', JSON.stringify(fileContent));
    
    res.status(201);
    res.send({
        error: false,
        message: 'Usuário criado com sucesso'
    });
}