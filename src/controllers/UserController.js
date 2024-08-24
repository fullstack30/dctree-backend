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
        await UserModel.create(body);
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
    let headers = request.headers;

    let currentUser = await UserModel.findByPk(id);

    if(currentUser.password !== headers.password) {
        return response.json({
            message: "Usuario não autorizado!"
        })
    }
    
    await UserModel.update(body, {
        where: { id }   
    })
    
    response.json({
        message: "Atualizado com sucesso " + id
    })
}

const deleteById = async (request, response) => {
    let id = request.params.id
    let headers = request.headers;

    const currentUser = await UserModel.findByPk(id);

    if(!currentUser || currentUser.password !== headers.password) {
        response.status(401).end();
        return response.json({
            message: "Usuario não autorizado!"
        })
    }

    await UserModel.destroy({
        where: {id}
    })

    return response.json({
        message: "Usuario deletado com sucesso!"
    });
}

module.exports = {
    list,
    create,
    update,
    getById,
    deleteById
}