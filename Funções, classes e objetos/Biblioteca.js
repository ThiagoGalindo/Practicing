class Livro{
    titulo
    autor
    editora
    anoDePublicaçao
    disponibilidade
    constructor(titulo, autor, editora, anoDePublicaçao){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoDePublicaçao = anoDePublicaçao
    }
    disponibilidade = true
}

class Biblioteca{
    nome
    endereço
    telefone
    acervoDeLivros
    constructor(nome, endereço, telefone, acervoDeLivros){
        this.nome = nome
        this.endereço = endereço
        this.telefone = telefone
        this.acervoDeLivros = acervoDeLivros
    }
    BuscarLivro(nomeDoLivro){
        for (let i = 0; i < this.acervoDeLivros.length; i++){
            if(nomeDoLivro === this.acervoDeLivros[i].titulo){
                console.log(`Titulo: ${this.acervoDeLivros[i].titulo}`)
                console.log(`Autor: ${this.acervoDeLivros[i].autor}`)
                console.log(`Editora: ${this.acervoDeLivros[i].editora}`)
                console.log(`Ano de publicação: ${this.acervoDeLivros[i].anoDePublicaçao}`)
            }
        }
    }
}

function Emprestimo(nomeDoLivro){
    let cont = 0
    for (let i = 0; i < biblioteca.acervoDeLivros.length; i++){
        if(nomeDoLivro === biblioteca.acervoDeLivros[i].titulo){
            cont++
            if(biblioteca.acervoDeLivros[i].disponibilidade == true){
                biblioteca.acervoDeLivros[i].disponibilidade = false
                return true
            }
            else{
                return false
            }
        }
    }
    if (cont == 0){
        console.log("Livro não encontrado")
    }
}

function Devolução(nomeDoLivro){
    let cont = 0 
    for (let i = 0; i < biblioteca.acervoDeLivros.length; i++){
        if(nomeDoLivro === biblioteca.acervoDeLivros[i].titulo){
            biblioteca.acervoDeLivros[i].disponibilidade = true
            cont++
            return true
        }
    }
    if (cont == 0){
        console.log("O livro citado não pertence a biblioteca")
    }
}

//criando objetos da classe Livro e adicionando-os em um array
let livro1 = new Livro("Livro1", "Autor1", "Editora1", 1980)
let livro2 = new Livro("Livro2", "Autor2", "Editora2", 1981)
let livro3 = new Livro("Livro3", "Autor3", "Editora3", 1982)
let livro4 = new Livro("Livro4", "Autor4", "Editora4", 1983)
let livro5 = new Livro("Livro5", "Autor5", "Editora5", 1984)
let livros = [livro1, livro2, livro3, livro4, livro5]

//criando um objeto da classe Biblioteca
let biblioteca = new Biblioteca("Biblioteca", "Rua Biblioteca, 100", "22224444", livros)

//implementando uma função para apenas testar o funcionamento do código
function TestarCodigo(livro){
    let emprestar = Emprestimo(livro)
    console.log(emprestar)

    let emprestar2 = Emprestimo(livro)
    console.log(emprestar2)

    let devolver = Devolução(livro)
    console.log(devolver)
}

console.log(TestarCodigo("Livro3"))