let number = parseInt(prompt("Please type a number to receive the Fibonacci sequence: "))
let fiboArray = [(number - 1), number]

//Usando for para reproduzir a lógica da sequência de Fibonacci
for (let i = 2; i < 10; i++){   
    fiboArray[i] = (fiboArray[i - 1] + fiboArray[i - 2])
}

console.log("Fibonacci: " + fiboArray)