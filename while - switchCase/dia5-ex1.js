let mathOperation = Number(prompt("Informe qual operação matemática deseja realizar: \n1 = soma \n2 = subtração \n3 = multiplicação \n4 = divisão "));
let number1 = Number(prompt("Insira o primeiro número: "));
let number2 = Number(prompt("Insira o segundo número: "));

switch (mathOperation){
    case 1:
        console.log("Resultado: "+ (number1 + number2))
        break;
    case 2:
        console.log("Resultado: "+ (number1 - number2))
        break;
    case 3:
        console.log("Resultado: "+ (number1 * number2))
        break;
    case 4:
        console.log("Resultado: "+ (number1 / number2))
        break;
    default:
        console.log("Informe a operação desejada corretamente")    
}