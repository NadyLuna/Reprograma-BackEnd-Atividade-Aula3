// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

const input = require("readline-sync")
   
   function calcularpotencia () {
      let potencia = input.question ('digite um valor:  ')
      
      let resultadoPotencia = 1 
            for(let i = 0; i < potencia; i++) {
        resultadoPotencia = resultadoPotencia * 2
    }
    return resultadoPotencia
}

console.log( `Sua potência é: ${calcularpotencia()}`)

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function maiorNumero (numero1,numero2,numero3) {

    if (numero1 > numero2 && numero2 > numero3) {      
        return numero1

  } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2

  } else {
        return numero3
  }
}

console.log(maiorNumero(90,60,30))

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

/*const input = require("readline-sync")

function contarvogal () {
    const vog = input.question ('digite um nome:  ')
    let totalvogal = 0   
    let string = ''
       
        for (let i = 0; i <= string.length -1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") 
        {
         totalvogal += 1;  
        }
    }
    
  }

    console.log(contarvogal('oi'))

    // Não deu certo.*/