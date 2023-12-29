let IDs = []
let senhas = []

//função que recebe opcão do usuário e retorna na função
function perguntarOpcao(){
    let opcao = prompt("O que deseja fazer? \n1 - Cadastro de usuário\n2 - Login \n3 - Excluir um usuário")
    return opcao
}

//função que cadastra um ID e Senha inserido pelo usuário
function cadastro(){
    IDs.push(prompt("ID: "))
    senhas.push(prompt("Senha: "))
}

//função que checa se o login inserido pertence ao array de IDs e permite ou não o login
function login(id, senha){
    let idIndex = IDs.indexOf(id)
    
    if (idIndex !== -1 && senhas[idIndex] === senha){
        console.log("Login bem-sucedido!")

    }
    else{
        console.log("ID ou Senha incorretos.")
    }
}

//função que exclui um cadastro. Checa se o ID fornecido realmente existe e, se sim, exclui
function excluirCadastro(){
    let id = prompt("Informe o ID: ")
    if(IDs.includes(id)){
        let idIndex = IDs.indexOf(id)
        IDs.splice(idIndex,1)
    }
    else{
        console.log("Informe um ID válido")
    }
}

//variável para receber a opção do usuário
let opcaoContinuar;

//implementando do-while e switch-case para criar o fluxo do programa
do {
    switch (perguntarOpcao()){
        case "1":
            cadastro()
            break

        case "2":
            console.log("===== LOGIN =====")
            let id = prompt("ID: ")
            let senha = prompt("Senha: ")
            login(id, senha)
            break

        case "3":    
            excluirCadastro()
            break

        default:
            console.log("Insira uma opção válida")    
        }

    opcaoContinuar = prompt("Digite 1 se deseja continuar")

} while(opcaoContinuar === "1")
