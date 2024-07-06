
let process = require('node:process');
let fs = require('node:fs');

fs.writeFile('nomes.txt', "Gustavo Silva", {flag: "a+"}, function () {
    console.log(arguments);
});

// 1. Receber uma lista de nomes como parametros de um arquivo
// 2. Salvar esses nome em um arquivo, um nome abaixo do outro

// Usando process.argv
// console.log(process.argv);
// console.log(`Meu nome é: ${process.argv[2]}`);




