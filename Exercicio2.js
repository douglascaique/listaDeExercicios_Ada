// Temos a lista de empregados com seus respectivos nomes e salários:

// ```jsx
// const empregados = [
//   { nome: 'João', salario: 1200 },
//   { nome: 'Maria', salario: 1500 },
//   { nome: 'Pedro', salario: 1800 },
//   { nome: 'Ana', salario: 1400 },
//   { nome: 'Carlos', salario: 2000 }
// ]

// ```

// Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.

// Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.

// Obs: Pode utilizar o `for` .

const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
]


//sintaxe some arr.some(callback[, thisArg])

const salarioMaior1500 = empregados.some(empregado => empregado.salario >= 1500);
console.log(salarioMaior1500)

const salarioMenor1000 = empregados.some(empregado => empregado.salario <= 1000);
console.log(salarioMenor1000)


const listaEmpregadosSalarioMaior1500 = empregados.filter(empregado => empregado.salario >= 1500)
console.log(listaEmpregadosSalarioMaior1500)

const listaEmpregadosSalarioMenor1000 = empregados.filter(empregado => empregado.salario <= 1000)
console.log(listaEmpregadosSalarioMenor1000)