const readline = require('readline-sync')
const calcular = require("./combustivel.js")

const distancia = readline.question('Informe a distancia (KM): ')
const recebeTipoCombustivel = readline.question('Informe o tipo de combustivel: ')
const tipoCombustivel = recebeTipoCombustivel.toUpperCase() 


console.log(calcular.CalcularCombustivel(distancia, tipoCombustivel))