require("dotenv").config();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const UserController = require('./controllers/UserController');
const UserAuth = require('./middlewares/UserAuth');

const PrivateRoutes = express.Router();
const PublicRoutes = express.Router();

PrivateRoutes.use(UserAuth);

PrivateRoutes.get('/users', UserController.list); // Listar todos os usuarios
PrivateRoutes.get('/users/:id', UserController.getById); // Exibir um usuario
PublicRoutes.post('/users', UserController.create); // Criar um novo usuario
PrivateRoutes.put('/users/:id', UserController.update); // Atualizar um usuario
PrivateRoutes.delete('/users/:id', UserController.deleteById); // Delete um usuario
PublicRoutes.post('/user/token', UserController.createToken); // Gerar token do usuario

app.use(PublicRoutes);
app.use(PrivateRoutes);


app.listen(port);