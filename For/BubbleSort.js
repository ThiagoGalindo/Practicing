let array =  [2,3,4,9,1,5]
let continueOption;

//do{
  //  console.log("========== Criando array ordenado ==========")
  //  array.push(Number(prompt(`Informe um número: `)))
  //  continueOption = prompt("Digite 1 se deseja continuar: ")
//} while (continueOption === "1")

function BubbleSort(array){
    let limit = array.length
    for (let i = 0; i < array.length; i++){
        let cont = 0
        limit--
        for (let j = 0; j <= limit; j++){
            if (array[j] > array[j + 1]){
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                cont ++
            }
        }
        if (cont < 1) break
    }
    return array
}
console.log(BubbleSort(array))