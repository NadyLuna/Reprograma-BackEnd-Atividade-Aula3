// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), 
// cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(number1, number2) {
    return number1 + number2
}

function subtracao(number1, number2) {
    return number1 - number2
}

function multiplicacao(number1, number2) {
    return number1 * number2
}

function divisao(number1, number2) {
    return number1 / number2
}
console.log(soma(1, 2))
console.log(subtracao(4, 2))
console.log(multiplicacao(5, 2))
console.log(divisao(10, 2))

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero).
// Adicione esta lógica nas funções.

function multiplicarSemZero(number1, number2){
    if (number1 ===0 || number2 === 0) {  // aqui poderia começar como diferente de zero !==
        return 'Não queremos valor zero'  // aqui seria return number1 *number2
    }
    return number1 * number2              // e aqui ficaria return 'Não queremos valor zero'
}

console.log (multiplicarSemZero(25,9))

function dividirSemZero(number1, number2){
    if (number1 ===0 || number2 === 0) {  // aqui poderia começar como diferente de zero !==
        return 'Não queremos valor zero'  // aqui seria return number1 *number2
    }
    return number1 / number2              // e aqui ficaria return 'Não queremos valor zero'
}

console.log (dividirSemZero(25,9))

// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String.
// Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function retornaString(a, b, op) {
    switch (op) {
        case 'soma':
            res = soma(a, b)
            break;
        case 'subtração':
            res = subtracao(a, b)
            break;
        case 'multiplicação':
            res = multiplicacao(a, b)
            break;
        case 'divisão':
            res = divisao(a, b)
            break;
    }
    return `O resultado da operação é ${res}`

}

console.log(retornaString(2, 8, 'multiplicação'))



// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função que resolva 
// a conta 36325 * (9824 + 777).

function somaMultiplicacao(a, b, c) {
    m = soma(b, c)
    return multiplicacao(a, m)
}

console.log(somaMultiplicacao(36325, 9824, 777))

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. 
// Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. 
// Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e 
// [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` 
// e como utilizá-lo.

function somaAleatorio(a, b) {
    num1 = Math.random() * (b - a) + a
    num2 = Math.random() * (b - a) + a
    total = num1 + num2
    return `A soma de ${num1.toFixed(2)} e ${num2.toFixed(2)} é ${total.toFixed(2)}`
}

console.log(somaAleatorio(3, 9))

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 números
// 2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum. 

function tresNumber(num1, num2, num3) {
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
        return "Preencha todos os valores corretamente!"
    }
    return ((num1 * num2 * num3) + 2)
}
console.log(tresNumber(3, 6, 9))

//7. Crie uma tabela de 6

function tabuada() {
    for (let i = 0; i <= 10; i++) {
        console.log(i * 6)
    }
}
tabuada()

// duas formas de fazer
function tabuada() {
    let num = 6
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}