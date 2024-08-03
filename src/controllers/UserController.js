
let db = [];

const list = (request, response) => {
    response.json(db);
}

const create = (request, response) => {
    let body = request.body;
    db.push(body);

    response.json({
        message: "Cadastrado com sucesso"
    });
}

const update = (request, response) => {
    let id = request.params.id
    let user = db[id];

    if(!user) {
        response.status(404);
        return response.json({
            message: "Usuario não encontrado"
        });
    }
    
    db[id] = {
        ...user,
        ...request.body
    }
    
    response.json({
        message: "Atualizado com sucesso " + id
    })
}

module.exports = {
    list,
    create,
    update
}