/* Exercícios 1 - 5 */
let a = 5;
let b = 10;

document.getElementById("botao").addEventListener("click", mostraResultados);

function mostraResultados() {
    document.getElementById("adicao").value = a + b;
    document.getElementById("subtracao").value = a - b;
    document.getElementById("multiplicacao").value = a * b;
    document.getElementById("divisao").value = a / b;
    document.getElementById("modulo").value = a % b;
}

//  ***  //

