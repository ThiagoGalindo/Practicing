// Criando a classe Aluno
class Aluno {
    nome
    idade
    nota
    constructor(nome, idade, nota){
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
    }
}

//Criando um array para receber os objetos da classe Aluno
let geralAlunos = [];

// Criando função que recebe 3 parâmetros que serão utilizados para criar um novo objeto da classe Aluno. A função também incrementa o array de alunos com os objetos
function cadastrarAluno(nome, idade, nota){
    let aluno  = new Aluno(nome, idade, nota);

    if (geralAlunos.includes(aluno) == false){
        geralAlunos.push(aluno);
    }

    return aluno
}

//Função para ordenar o array de alunos por nota (através de Bubble Sort)
function ordenarPorNota(arrayDeAlunos){
    let limit = arrayDeAlunos.length;
    let changes = 0;

    for (let i = 0; i < ((arrayDeAlunos.length) - 1); i++){
        for (let j = 0; j < (limit - 1); j++){
            if (arrayDeAlunos[j].nota > arrayDeAlunos[j + 1].nota){
                [arrayDeAlunos[j], arrayDeAlunos[j + 1]] = [arrayDeAlunos[j + 1], arrayDeAlunos[j]];
                changes++;
            }
        }
        limit--
        if (changes === 0) break
    }
    return arrayDeAlunos
}

//Função para ordenar o array de alunos por idade (através de Bubble Sort)
function ordenarPorIdade(arrayDeAlunos){
    let limit = arrayDeAlunos.length;
    let changes = 0;

    for (let i = 0; i < ((arrayDeAlunos.length) - 1); i++){
        for (let j = 0; j < (limit - 1); j++){
            if (arrayDeAlunos[j].idade < arrayDeAlunos[j + 1].idade){
                [arrayDeAlunos[j], arrayDeAlunos[j + 1]] = [arrayDeAlunos[j + 1], arrayDeAlunos[j]];
                changes++;
            }
        }
        limit--
        if (changes === 0) break
    }
    return arrayDeAlunos
}

//Função para ordenar o array de alunos por ordem alfabética
function ordemAlfabetica(arrayDeAlunos){
    arrayDeAlunos.sort((a, b) => {
        const nomeA = a.nome.toUpperCase();
        const nomeB = b.nome.toUpperCase();
    
        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });

    return arrayDeAlunos
}

//Função para calcular a média das notas dos alunos, acessando diretamente a propriedade 'nota'
function calcularMedia(arrayDeAlunos){
    let cont = 0;
    let totalAlunos = arrayDeAlunos.length;

    for (let i = 0; i < totalAlunos; i++){
        cont += arrayDeAlunos[i].nota;
    }
    let media = (cont / totalAlunos);

    return media
}

let opcaoContinuar = true;
let segundaOpcao;

//Entrada de dados
while(opcaoContinuar === true){
    console.log("========== CADASTRO DE ALUNOS ==========");
    let nome = prompt("Nome do aluno: ");
    let idade = parseInt(prompt("Idade do aluno: "));
    let nota = parseFloat(prompt("Nota do aluno: "));

    cadastrarAluno(nome, idade, nota)
    opcaoContinuar = prompt("Deseja cadastrar um novo aluno? \nSe sim, digite 1 ");

    if (opcaoContinuar === "1"){
        opcaoContinuar = true;
    }
    else{
        segundaOpcao = prompt("O que deseja fazer? \n1 - Visualizar alunos por ordem de notas \n2 - Visualizar alunos por ordem de idade: \n3 - Visualizar alunos por ordem alfabética \n4 - Visualizar média dos alunos \n5 - Sair");

        switch (segundaOpcao){
            case "1":
                console.log(ordenarPorNota(geralAlunos));
                break;
            case "2":
                console.log(ordenarPorIdade(geralAlunos));
                break;
            case "3":
                console.log(ordemAlfabetica(geralAlunos));
                break;
            case "4":
                console.log(calcularMedia(geralAlunos));
                break;
            case "5":
                segundaOpcao = false
                break;
            default:
                console.log("Escolha uma opção válida");
                break;
        }
    }
}


