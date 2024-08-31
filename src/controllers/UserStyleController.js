const UiStyleModel = require("../models/UiStyleModel");
const UserModel = require("../models/UserModel");

const updateUiStyle = async (request, response) => {

    let body = request.body.map(item => {
        item.user_id = request.params.id;
        return item;
    })


    await UiStyleModel.bulkCreate(body);

    let result = await UiStyleModel.findAll();
    console.log(result);
}

updateUiStyle();