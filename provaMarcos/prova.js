//1-

function meuCallback() {
    console.log("Teste!");
}

function executaCallback(callback) {
    callback();
}

executaCallback(meuCallback);


//2
function mostrarMensagemDepoisDeSegundos(mensagem){
    setTimeout(() => {
        console.log(mensagem)
    }, 5000)
}

let mensagem = ('Hello')
console.log(mostrarMensagemDepoisDeSegundos(mensagem))



//3
    function recebeFrutas(frutas){
        for(let i = 0; i<frutas.lenght;i++){
            let frutas = frutas[i]
        }
        return frutas
    }

    let frutas = ['Banana','Maçã',"Pessego"]
    console.log(recebeFrutas(frutas))


//4
    let objeto = {
        nome: "Gustavo",
        sobrenome: "Henrique",
        junta: function(){
            return this.nome + "  " + this.sobrenome
        },
        naoJunta: () => {
            return this.nome + "  " + this.sobrenome
        }
    }
    console.log(objeto.junta())
    console.log(objeto.naoJunta())


//5 O Let é uma variavel que pode ser mudada localmente e o const não pode ser alterada

let x = 10;
x = 20

const y = 30;
//y = 20 // erro


//6

let pessoa= [{
    nome:"Gustavo",
    Nascimento:"Pouso Alegre",
    cpf: '02184026603'
}, aluno= {
    nome:"Gustavo",
    Nascimento:"Pouso Alegre",
    cpf: '02184026603',
    matricula: 98023041
}]


function calculaNotas(pessoa,notas){
    let soma = 0;
    for(let i = 0 ; i < pessoa.lenght;i++ ){
        let lista = pessoa[i]
        for(let j = 0 ; i < notas.lenght;i++){
            soma = lista += notas[i]
        }
    }
    return soma
}

let notas = [5,2,4,3,2]

console.log(calculaNotas(aluno,notas))