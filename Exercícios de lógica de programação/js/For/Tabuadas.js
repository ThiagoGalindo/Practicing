let numero = Number(prompt("Informe um número: "))
console.log("Tabuadas: \n")

for (let contador = 0; contador <=2; contador++){
    for (let contador = 0; contador <= 10; contador++){
        let tabuada = console.log(numero +" x "+ contador +" = "+ (numero * contador))
    }
    numero++ 
    console.log("\n")
}