let models =  [];
let years = [];
let values = [];
let continueOption;

do {
    models.push(prompt("Informe o modelo do carro: "))
    years.push(parseInt(prompt("Informe o ano do carro: ")))
    values.push(parseFloat(prompt("Informe o valor do carro: ")))
    continueOption = prompt("Deseja continuar? \n1 - Sim \n2 - Não")
} while(continueOption === "1")

let limit = values.length

for (let i = 0; i < values.length; i++ ){
    let cont = 0
    limit --

    for (let j = 0; j <= limit; j++){
        if (values[j] > values[j + 1]){
            [models[j], models[j + 1]] = [models[j + 1], models[j]];
            [values[j], values[j + 1]] = [values[j + 1], values[j]];
            [years[j], years[j + 1]] = [years[j + 1], years[j]];
            cont++
        }
    }
    if (cont < 1) break; 
}
console.log(models)
console.log(years)
console.log(values)