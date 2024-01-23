let numbers = []
let invertedNumbers = []
let invertedCont = 0
console.log("Informe 5 números em sequência: ")

//Criando for para inserir os números da sequência original, que serão definidos pelo usuário
for (let i = 0; i < 5; i++){
    numbers[i] = Number(prompt(`Informe o ${i + 1}º número: `))
}
console.log(`Sequência: ${numbers}`)

//Criando for para inverter a sequência de números
for (let i = 4; i >= 0; i--){
    invertedNumbers[invertedCont] = numbers[i] 
    invertedCont++
}

console.log(`Sequência invertida: ${invertedNumbers}` )