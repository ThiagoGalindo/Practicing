let firstName;
let age;
let weight;
let height;
let profession;
let opcaoContinuar;
let ageDetails;
let birthDate;


do {
    firstName = prompt("Informe seu nome: ")
    age = parseInt(prompt("Informe sua idade: "))
    weight = parseFloat(prompt("Informe seu peso: "))
    height = parseFloat(prompt("Informe sua altura: "))
    profession = prompt("Informe sua profissão: ")

    console.log("Olá "+ firstName +", você tem "+ age + " anos, é "+ profession + ", tem "+ height + "m de altura e pesa "+ weight +"kg."    )

    if (age >= 18) {
        console.log("Liberado pra tomar uma")
    }
    else {
        console.log("Brecado")
    }



    opcaoContinuar = Number(prompt("Deseja continuar? \n1 - Sim \n2 - Não"))

} while (opcaoContinuar === 1)