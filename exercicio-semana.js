// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

const input = require("readline-sync")

function calcularpotencia() {
    let potencia = input.question('digite um valor:  ')

    let resultadoPotencia = 1
    for (let i = 0; i < potencia; i++) {
        resultadoPotencia = resultadoPotencia * 2
    }
    return resultadoPotencia
}
console.log(`Sua potência é: ${calcularpotencia()}`)

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function maiorNumero(numero1, numero2, numero3) {

    if (numero1 > numero2 && numero2 > numero3) {
        return numero1

    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2

    } else {
        return numero3
    }
}
console.log(maiorNumero(90, 60, 30))

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

function contarvogal(string) {
    let totalvogal = 0
    for (let i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            totalvogal += 1;
        }
    }
    return totalvogal
}

console.log(contarvogal('eu amo você'))

// Usando outra função
function contarVogal(str) {
    let cont = 0
    let texto = str.split('')
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u') {
            cont++
        }
    }
    return cont
}

console.log(contarVogal('eu amo você'))

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. 
// Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. 
// Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

function primo(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false
        } else {
            return true
        }
    }
}
console.log(primo(14))

// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e 
// retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]

let arr = [1, 2, 3, 4, 5];
console.log(arr)
// Define uma função no prototipo do Array
// para retornar o mesmo com valores em orderm invertida.
Array.prototype.inverter = function () {
    let arr = [];
        for (i = this.length - 1; i >= 0; i--) {
        arr.push(this[i]);
    }
    return arr;
}
let novoArr = arr.inverter();

console.log(novoArr);

// Método arr.reverse()
let meuArray = [1, 2, 3, 4, 5]
console.log(meuArray);
let meuArrayIvertido = meuArray.reverse();
console.log(meuArrayIvertido);