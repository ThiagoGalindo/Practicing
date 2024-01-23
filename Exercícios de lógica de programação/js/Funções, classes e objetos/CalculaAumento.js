//Função para perguntar nome e salário do colaborador
function recebeInfos(){
    const nome = prompt("Informe seu nome: ")
    let salario = parseFloat(prompt('ThiagoInforme seu salário: \n(Use " . " como separador decimal. '))

    calculaSalario(nome, salario)
} 

//Função para calcular o aumento de salário
function calculaSalario(nome, salario){
    let aumento;

    if (salario <= 1500){
        aumento = 20 //%
    }
    else if (salario > 1500 && salario <= 2000){
        aumento = 15 //%
    }
    else if (salario > 2000 && salario <= 3000){
        aumento = 10 //%
    }
    else{
        aumento = 5 //%
    }

    let salarioTotal =  (salario + ((salario * aumento)/100))
    console.log(`Nome: ${nome} \nSalario Atual: R$ ${(salario.toFixed(2))} \nPorcentagem de aumento: ${aumento} % \nSalario com aumento: R$ ${(salarioTotal.toFixed(2))}`)

    recebeOpcao()
}

//Função para perguntar ao usuário se deseja calcular um novo salário
function recebeOpcao() {
    let resposta = prompt("Deseja calcular novamente? \nDigite '1' se deseja calcular novamente: ")

    if (resposta === "1"){
        recebeInfos()
    }
    else{
        console.log("Concluído.")
    }
}

console.log(recebeInfos())