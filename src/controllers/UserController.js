const UserModel = require('../models/UserModel');

const list = async (request, response) => {
    let result = await UserModel.findAll({
        order: [
            ["updatedAt", "ASC"]
        ]
    });
    response.json(result);
}

const getById = async (request, response) => {
    let id = request.params.id;
    let user = await UserModel.findOne({
        where: { id }
    });

    return response.json(user);
}

const create = (request, response) => {
    let body = request.body;
    
    UserModel.create(body);

    response.json({
        message: "Cadastrado com sucesso"
    });
}

const update = async (request, response) => {

    let id = request.params.id
    let body = request.body;
    
    await UserModel.update(body, {
        where: { dc: id }
    })
    
    response.json({
        message: "Atualizado com sucesso " + id
    })
}

module.exports = {
    list,
    create,
    update,
    getById
}