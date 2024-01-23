let fome = prompt("Você está com fome? ").toUpperCase();
let dinheiro = prompt("Você tem dinheiro? ").toUpperCase();
let restaurante = prompt("O restaurante está aberto? ").toUpperCase();

if (fome === "N" || dinheiro === "N"){
    console.log("Hoje a janta será em casa. ");
}
else if (dinheiro === "S" && restaurante === "N"){
    console.log("Peça um delivery.");
}
else if (fome === "S" && dinheiro === "S" && restaurante === "S"){
    console.log("Hoje o jantar será no seu restaurante preferido!");
}
