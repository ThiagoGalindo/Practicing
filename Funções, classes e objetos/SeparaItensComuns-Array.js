let array1 = [13,20,10,22,24,20,27,17,19,14]
let array2 = [24,22,23,11,15,17,29,14,16,21]

function separaComuns(arrayA, arrayB){
    limit = arrayA.length
    let cont = 0
    let newArray = []

    for (let i = 0; i < limit; i++){
        for(let j = 0; j < limit; j++){
            if (arrayA[i] === arrayB[j]){
                newArray[cont] = arrayA[i]
                cont++
                j = limit
            }
        }
    }
    
    return newArray
}

console.log(separaComuns(array1, array2))