let nome = prompt("Informe seu nome: ");
let cpf = prompt("Informe o seu CPF: ");
let opcao;
let valor;
let saldo = 1000;
let opcaoContinuar;
let maiorValor = 0;
let totalValores = 0;
let contador = 0;


do {
    opcao = Number(prompt("Qual opção deseja? \n1 - Saque \n2 - Depósito"));

    if (opcao === 1){
        valor = Number(prompt("Informe o valor: "));
        saldo = saldo - valor;
        console.log("Saque realizado! \nNovo saldo: "+ saldo);
        contador++;
        totalValores += valor;
        if (valor > maiorValor){
            maiorValor = valor;
        }
        opcaoContinuar = prompt("Deseja continuar? \n1 - Continuar \n2 - Sair ")
    }

    else if (opcao === 2) {
        valor = Number(prompt("Informe o valor: "));
        saldo = saldo + valor
        console.log("Depósito realizado! \nNovo saldo: "+ saldo)
        contador++;
        totalValores += valor;
        if (valor > maiorValor){
            maiorValor = valor;
        }
        opcaoContinuar = prompt("Deseja continuar? \n1 - Continuar \n2 - Sair ")
    }
} while(opcaoContinuar === "1")

let media = totalValores / contador
console.log("Média: "+media)
console.log("Maior valor "+ maiorValor)