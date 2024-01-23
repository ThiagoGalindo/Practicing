let nome = prompt("Informe seu nome: ");
let idade = parseInt(prompt("Informe sua idade: "));
let habilitacao = prompt("Você possui habilitação? ").toUpperCase();
let carro = prompt("Você tem carro? ").toUpperCase();

if (idade < 18 || habilitacao === "N"){
    console.log("Você não pode dirigir. ");
}
else if (idade >= 18 && habilitacao === "S" && carro === "N"){
    console.log("Você pode dirigir mas não tem um carro. ");
}
else if (idade >= 18 && habilitacao === "S" && carro === "S"){
    console.log("Você será o motorista. ")
}
console.log("=================")