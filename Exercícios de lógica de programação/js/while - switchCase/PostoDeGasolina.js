let opcao = Number(prompt("Bem-vindo ao posto SHELL! \nInforme a opção desejada: \n1 = Abastecer com gasolina \n2 = Abastecer com álcool \n3 = Calibrar os pneus" ));

while (opcao > 0){
    switch (opcao){
        case 1:
            valor = Number(prompt("Qual o valor que deseja abastecer? "))
            console.log("Obrigado! \nVocê abasteceu "+ (valor / 5).toFixed(1) +" litros de gasolina. ")
            break;
        case 2:
            valor = Number(prompt("Qual o valor que deseja abastecer? "))
            console.log("Obrigado! \nVocê abasteceu "+ (valor / 3).toFixed(1) +" litros de álcool. ")
            break;
        case 3:
            console.log("Pneus calibrados com sucesso.")
            break;
        default:
            console.log("Informe a opção correta.")
    }
    break
}