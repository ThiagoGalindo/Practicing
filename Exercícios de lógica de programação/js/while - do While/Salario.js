let nome;
let idade;
let salarioAtual;
let opcaoContinuar;

do {
    nome = prompt("Informe seu nome: ");
    idade = parseInt(prompt("Informe sua idade: "));
    salarioAtual = parseFloat(prompt("Informe seu salario atual: "));

    console.log("Nome: "+ nome);
    console.log("Idade: "+ idade);
    console.log("Salario atual: "+ salarioAtual);

    opcaoContinuar = parseInt(prompt("As informações estão corretas? \n1 - Sim \n2 - Não"));

} while (opcaoContinuar === 2)

let aumento = 0.015;
let anoAtual = 2024;

for (let i = 1; i <= 10; i++){
    salarioAtual = salarioAtual + (salarioAtual * aumento)
    console.log("Salário em " +anoAtual+ " = " +salarioAtual)
    aumento *= 2
    anoAtual++
}
