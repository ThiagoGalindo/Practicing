const calcular  = require("./combustivel")

test('Calcular a quantidade de litros necessarios usando etanol', () => {
    expect(calcular.CalcularCombustivel(110, "ETANOL")).toBe(10)
})

test('Calcular a quantidade de litros necessarios usando gasolina', () => {
    expect(calcular.CalcularCombustivel(110, "GASOLINA")).toBe(6.875)
})