const UserModel = require('../models/UserModel');
const UserRepository = require('../reposittory/UserRepository');

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

const create = async (request, response) => {
    let body = request.body;

    try {
        await UserRepository.save(body);
        return response.json({
            message: "Cadastrado com sucesso"
        });
    } catch(error) {
        console.log(Object.getOwnPropertyNames(error));
        return response.json({
            message: error.message
        })
    }
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