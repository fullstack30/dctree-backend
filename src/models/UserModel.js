const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const UserModel = connection.define("User", {
    firstname: {
        type: DataTypes.STRING(45), // VARCHAR(45)
        allowNull: false // NOT NULL
    },
    surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

module.exports = UserModel;