const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const UserModel = connection.define("User", {
    firstname: DataTypes.STRING(45),
    surname: DataTypes.STRING(45),
    username: DataTypes.STRING(32),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255)
});

module.exports = UserModel;