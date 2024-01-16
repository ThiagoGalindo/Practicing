function CalcularCombustivel(distancia, tipoCombustivel){
    let totalDeLitros = 0;
    if (tipoCombustivel === "GASOLINA"){
        totalDeLitros = Number((distancia / 16).toFixed(3))
    }
    else if (tipoCombustivel === "ETANOL"){
        totalDeLitros = Number((distancia / 11).toFixed(3))
    }
    return totalDeLitros
}

module.exports = {CalcularCombustivel}