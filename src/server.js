require("dotenv").config();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const UserController = require('./controllers/UserController');

app.get('/users', UserController.list); // Listar todos os usuarios
app.get('/users/:id', UserController.getById); // Exibir um usuario
app.post('/users', UserController.create); // Criar um novo usuario
app.put('/users/:id', UserController.update); // Atualizar um usuario
// app.delete('/users/:id', UserController.deleteById); // Delete um usuario

app.listen(port);