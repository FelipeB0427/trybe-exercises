/* Exercícios 1 - 5 */

/* Faça cinco programas, um para cada operação aritmética básica.
Seu programa deve ter duas variáveis, a e b , definidas no começo
com os valores que serão operados. */
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

/* Exercícios 6 - 9 */

/* Faça um programa que retorne o maior de dois números.
Defina no começo do programa duas variáveis com os valores
que serão comparados. */
document.getElementById("botao-1").addEventListener("click", mostraComparacoesD);

function mostraComparacoesD() {
    let c = document.getElementById("primeiro-valor-1").value;
    let d = document.getElementById("segundo-valor-1").value;

    if (c > d) {
        document.getElementById("resultado-1").value = c;
    } else {
        document.getElementById("resultado-1").value = d;
    }
}

/* Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores
que serão comparados. */
document.getElementById("botao-2").addEventListener("click", mostraComparacoesT);

function mostraComparacoesT() {
    let e = document.getElementById("primeiro-valor-2").value;
    let f = document.getElementById("segundo-valor-2").value;
    let g = document.getElementById("terceiro-valor-2").value;

    if (e > f && e > g) {
        document.getElementById("resultado-2").value = e;
    } else if (f > e && f > g) {
        document.getElementById("resultado-2").value = f;
    } else {
        document.getElementById("resultado-2").value = g;
    }
}

/* Faça um programa que, dado um valor definido numa variável,
retorne "positive" se esse valor for positivo, "negative" se
for negativo e "zero" caso contrário. */
document.getElementById("botao-3").addEventListener("click", positivoNegativo);

function positivoNegativo() {
    let h = document.getElementById("valor-3").value;

    if (h > 0) {
        document.getElementById("resultado-3").value = "positive";
    } else if (h < 0) {
        document.getElementById("resultado-3").value = "negative";
    } else {
        document.getElementById("resultado-3").value = "neutral";
    }
}

/* Faça um programa que defina três variáveis com os valores dos três ângulos
internos de um triângulo. Retorne true se os ângulos representarem os ângulos
de um triângulo e false caso contrário. */
document.getElementById("botao-4").addEventListener("click", tamTriangulo);

function tamTriangulo() {
    let i = parseInt(document.getElementById("primeiro-valor-4").value, 10);
    let j = parseInt(document.getElementById("segundo-valor-4").value, 10);
    let k = parseInt(document.getElementById("terceiro-valor-4").value, 10);

    let calcTriangulo = i + j + k;

    if (calcTriangulo == 180) {
        document.getElementById("resultado-4").value = "true";
    } else {
        document.getElementById("resultado-4").value = "false";
    }
}
