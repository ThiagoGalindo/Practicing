let totalAlunos = 0;
let totalNotas = 0;
let totalNotasF = 0;
let totalNotasM = [];
let desejaContinuar = true;

do {
    let notas = Number(prompt("Informe sua nota: "));
    let sexo = prompt("Qual seu sexo? \nDigite M ou F.").toUpperCase();
    totalNotas += notas;
    totalAlunos++;
    
    if (sexo === "F" && notas > 7){
        totalNotasF++;
    }
    else if (sexo === "M"){
        totalNotasM.push(notas);
    }
    else{
    }
    
    let check = prompt("Deseja continuar? \nDigite S ou N").toUpperCase();

    if (check === "S"){
        desejaContinuar = true;
    }
    else if (check === "N"){
        desejaContinuar = false;
    }
    else{
        console.log("Informe um valor válido");
    }

} while (desejaContinuar === true)

function calculaMaior (lista){
    let tamanho = lista.length
    let cont = 0;

    for (let i = 0; i <= tamanho; i++){
        
        if (lista[i] > cont){
            cont = lista[i]
        }
        else{
        }
    }
    return(cont);
}

let mediaGeral = (totalNotas / totalAlunos)
console.log("Média: "+ mediaGeral)
console.log(totalNotasM.length+ " Homens enviaram as notas. ")
console.log(totalNotasF+ " Mulher(es) teve(tiveram) nota acima de 7. ")
console.log("A maior nota entre os homens foi: ", calculaMaior(totalNotasM))