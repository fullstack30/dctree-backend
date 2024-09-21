const UiStyleModel = require("../models/UiStyleModel");
const UserModel = require("../models/UserModel");

const updateUiStyle = async (request, response) => {

    let body = request.body.map(item => {
        item.user_id = request.params.id;
        return item;
    });

    await UiStyleModel.bulkCreate(body, {updateOnDuplicate: ['attribute', 'value', 'is_hover']});

    let result = await UiStyleModel.findAll();
    
    return response.json({ result });
}

const list = async (request, response) => {
    let userId = request.params.id;

    let result = await UiStyleModel.findAll({ where : { user_id: userId } });

    return response.json(result);
}

module.exports = {
    updateUiStyle,
    list
}