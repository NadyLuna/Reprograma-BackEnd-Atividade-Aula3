// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 números
// 2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum. 
 
 
function tresNumber (num1, num2, num3) {
    if (num1 === undefined || num2 === undefined|| num3 === undefined) {
        return "Preencha todos os valores corretamente!"
    } return ((num1 * num2 * num3) + 2)
}
console.log(tresNumber (3, 6, 9))