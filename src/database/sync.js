require("dotenv").config();

const connection = require('../database/connection');

require('../models/UserModel');

// ... 30 models

connection.sync({force: true});