// Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos:

// ```jsx
// const pessoas = [
//   { nome: 'João', altura: 1.75, peso: 80 },
//   { nome: 'Maria', altura: 1.68, peso: 60 },
//   { nome: 'Pedro', altura: 1.80, peso: 70 },
//   { nome: 'Ana', altura: 1.65, peso: 55 },
//   { nome: 'Carlos', altura: 1.90, peso: 100 }
// ]

// ```
// Crie um função que receba a função a seguir e mostre no console o valor do calculo do IMC da pessoa.
// exemplo: `O IMC é Carlos é 40`
// Sendo que o IMC é calculado pela fórmula `peso / altura²`.
// Obs: Utilize `for` ou algum método de array.

const pessoas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
]

function calculaIMC(pessoas) {
    for (let i = 0; i < pessoas.length; i++) {
        let pessoa = pessoas[i]
        let imc = pessoa.peso / (pessoa.altura * pessoa.altura);
        console.log(`O IMC de ${pessoa.nome} é ${imc}`)
    }
}
calculaIMC(pessoas)