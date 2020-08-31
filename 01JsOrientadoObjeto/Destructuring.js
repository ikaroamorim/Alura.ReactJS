
//Destructuring para não obter array de arrays
const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numeros1 = [numerosPares,numerosImpares]
const numeros2 = [...numerosPares,...numerosImpares]

console.log(numeros1)
console.log(numeros2)

//Destructuring para atribuir valor variaveis
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6]

console.log(num1)
console.log(outrosNumeros)

//Destructuring com Valor padrão
const [ nome= 'Pedro'] = [] //Se atribuirmos um valor sobrescreverá Pedro

console.log(nome)

//Destructuring para adicionar propriedade ao objeto
const pessoa = {
    nome: 'Ikaro',
    idade: 32
}

const pessoaComTel = {...pessoa, telefone: 123123123}
console.log(pessoa, pessoaComTel)

//pegando prop do obj
const { idade } = pessoa

console.log(idade)

//pegando dados do obj enviado a função
function imprimeDados({nome, idade}){
    console.log(nome, idade)
}