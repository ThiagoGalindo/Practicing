//importando o método 'readline' para receber dados do usuário
const readLine = require('readline');

//criação da classe carro
class Carro{
    Marca
    Modelo
    Ano
    constructor(marca, modelo, ano){
        this.Marca = marca
        this.Modelo = modelo
        this.Ano = ano
    }
}

//implementaçao da função para utilizar o método GET na API
function Get() {
    return fetch("https://apigenerator.dronahq.com/api/rHJp_wCW/Carros")
    .then((response) => {
        if(response.ok){
        return response.json()
        }
        else{
            throw new Error(`${response.status} - ${response.statusText}`)
        }
    })    
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}    

//implementaçao da função para utilizar o método GET by ID na API
async function GetByID(num) {
    return fetch("https://apigenerator.dronahq.com/api/rHJp_wCW/Carros/"+num)
    .then((response) => {
        if(response.ok){
           return response.json()
        }
        else{
            throw new Error(`${response.status} - ${response.statusText}`)
        }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

//implementaçao da função para utilizar o método POST na API
async function postData(url = '', data = {}) {
    try{
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error(`${response.status} - ${response.statusText}`)
        }
        return response.json();
    }catch(error){
        console.log(error)
    }
}

//implementaçao da função para utilizar o método PUT na API
async function putData(url = '', data = {}) {

    try{
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        if(!response.ok){
            throw new Error(`${response.status} - ${response.statusText}`)            
        }
        return response.json();
    } catch(error){
        console.log(error)
    }
}

//implementaçao da função para utilizar o método DELETE na API
async function deleteData(url = '', data = {}) {
    try{
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        if(!response.ok){
            throw new Error(`${response.status} - ${response.statusText}`)
        }
        return response.json();
    }catch(error){
        console.log(error)
    }
}

//criando uma interface para o método readline
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//implementaçao de uma função que irá utilizar o 'readline' para receber uma resposta do usuário e retorná-la 
async function perguntar(question){
    return new Promise(resolve => {
        rl.question(question, resolve)
    })
}

//implementaçao da função 'main' para criar o fluxo de funcionamento do código
async function main(){
    try {    
        const perguntarOpcao = await perguntar("Informe sua opção: \n1 - Ver lista de carros \n 2 - Pesquisar um carro \n 3 - Adicionar um carro \n"
        +"4 - Atualizar dados de um carro \n5 - Deletar um carro da lista\n")
        switch(perguntarOpcao){
            case "1":
                console.log(Get())
                break
            case "2":
                let respostaID = await perguntar("Informe o ID: ")
                let id = parseInt(respostaID)
                
                let resultado = await GetByID(id)
                break
            case "3":
                let marcaPOST = await perguntar("Informe a marca do carro: ")
                let modeloPOST = await perguntar("Informe o modelo do carro: ")
                let anoPOST = parseInt(await perguntar("Informe o ano do carro: "))
                let carroPOST = new Carro(marcaPOST, modeloPOST, anoPOST)
                let resultadoPOST = await postData('https://apigenerator.dronahq.com/api/rHJp_wCW/Carros', carroPOST)
                break;
            case "4":
                console.log("Informe os dados atualizados: ")
                let marcaPUT = await perguntar("Informe a marca do carro: ")
                let modeloPUT = await perguntar("Informe o modelo do carro: ")
                let anoPUT = parseInt(await perguntar("Informe o ano do carro: "))
                let carroPUT = new Carro(marcaPUT, modeloPUT, anoPUT)
                let idPUT = parseInt(await perguntar("Informe o ID do número anterior: "))
                let resultadoPUT = await putData('https://apigenerator.dronahq.com/api/rHJp_wCW/Carros/'+idPUT, carroPUT)
                break
            case "5":
                const idDELETE = parseInt(await perguntar("Informe o ID do carro que deseja remover da lista: "))
                const resultadoDELETE = deleteData('https://apigenerator.dronahq.com/api/rHJp_wCW/Carros/'+idDELETE)
                break
            default:
                console.log("Informe uma opção válida")
        }
        rl.close()
    } catch(error){
        console.log(error)
    } 
}

//chamando o método 'main' para inicializar o programa
main()
