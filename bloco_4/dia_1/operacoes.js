// Exercícios 1 - 5 //

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

// Exercícios 6 - 9 //

/* Faça um programa que retorne o maior de dois números.
Defina no começo do programa duas variáveis com os valores
que serão comparados. */
document.getElementById("botao-1").addEventListener("click", mostraComparacoesD);

function mostraComparacoesD() {
  let a = document.getElementById("primeiro-valor-1").value;
  let b = document.getElementById("segundo-valor-1").value;

  if (a > b) {
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
  let a = document.getElementById("primeiro-valor-2").value;
  let b = document.getElementById("segundo-valor-2").value;
  let c = document.getElementById("terceiro-valor-2").value;

  if (a > b && a > c) {
    document.getElementById("resultado-2").value = a;
  } else if (b > a && b > c) {
    document.getElementById("resultado-2").value = b;
  } else {
    document.getElementById("resultado-2").value = c;
  }
}

/* Faça um programa que, dado um valor definido numa variável,
retorne "positive" se esse valor for positivo, "negative" se
for negativo e "zero" caso contrário. */
document.getElementById("botao-3").addEventListener("click", positivoNegativo);

function positivoNegativo() {
  let a = document.getElementById("valor-3").value;

  if (a > 0) {
    document.getElementById("resultado-3").value = "positive";
  } else if (a < 0) {
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
  let a = parseInt(document.getElementById("primeiro-valor-4").value, 10);
  let b = parseInt(document.getElementById("segundo-valor-4").value, 10);
  let c = parseInt(document.getElementById("terceiro-valor-4").value, 10);

  let calcTriangulo = a + b + c;

  if (calcTriangulo == 180) {
    document.getElementById("resultado-4").value = "true";
  } else {
    document.getElementById("resultado-4").value = "false";
  }
}

//  ***  //

// Exercícios 10 - 11 //

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os
movimentos que ela faz. */
document.getElementById('botao-5').addEventListener('click', pecaXadrez);

function pecaXadrez() {
  let a = document.getElementById('valor-5').value;
  a = a.toLowerCase();

  switch(a) {
    case 'bishop':
      document.getElementById('resultado-5').value = 'diagonals';
      break;
    case 'pawn':
      document.getElementById('resultado-5').value = 'one front move';
      break;
    case 'knight':
      document.getElementById('resultado-5').value = 'L';
      break;
    case 'rook':
      document.getElementById('resultado-5').value = 'horizontally or vertically';
      break;
    case 'queen':
      document.getElementById('resultado-5').value = 'any unoccupied square';
      break;
    case 'king':
      document.getElementById('resultado-5').value = 'one unoccupied square';
      break;
    default:
      document.getElementById('resultado-5').value = 'this piece does not exist';
      break;
  }
}

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em
conceitos de A a F. Siga essas regras */
document.getElementById('botao-6').addEventListener('click', retornaNota);

function retornaNota() {
  let a = parseInt(document.getElementById('valor-6').value, 10);

  if (a < 0 || a > 100) {
    document.getElementById('resultado-6').value = 'error!!';
  } else if (a < 50) {
      document.getElementById('resultado-6').value = 'F';
  } else if (a >= 50 && a < 60) {
      document.getElementById('resultado-6').value = 'E';
  } else if (a >= 60 && a < 70) {
      document.getElementById('resultado-6').value = 'D';
  } else if (a >= 70 && a < 80) {
      document.getElementById('resultado-6').value = 'C';
  } else if (a >= 80 && a < 90) {
      document.getElementById('resultado-6').value = 'B';
  } else if (a >= 90 && a <= 100) {
      document.getElementById('resultado-6').value = 'A';
  }
}

// ***  //

// Exercícios 12 - 14 //

/* Escreva um programa que defina três números em variáveis no seu começo e retorne
true se pelo menos uma das três for par. Caso contrário, ele retorna false. */
document.getElementById('botao-7').addEventListener('click', numPar);

function numPar() {
  let a = parseInt(document.getElementById('primeiro-valor-7').value, 10);
  let b = parseInt(document.getElementById('segundo-valor-7').value, 10);
  let c = parseInt(document.getElementById('terceiro-valor-7').value, 10);

  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return document.getElementById('resultado-7').value = 'true';
  } 

  return document.getElementById('resultado-7').value = 'false';
}

/* Escreva um programa que defina três números em variáveis no seu começo e retorne
true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. */
document.getElementById('botao-8').addEventListener('click', numImpar);

function numImpar() {
  let a = parseInt(document.getElementById('primeiro-valor-8').value, 10);
  let b = parseInt(document.getElementById('segundo-valor-8').value, 10);
  let c = parseInt(document.getElementById('terceiro-valor-8').value, 10);

  if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    return document.getElementById('resultado-8').value = 'true';
  } 

  return document.getElementById('resultado-8').value = 'false';
}

// ***  //

// Exercícios 15 - 16 //

/* Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o
custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro
(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. */
document.getElementById('botao-9').addEventListener('click', vendasLucro);

function vendasLucro() {
  let valorCusto = parseFloat(document.getElementById('primeiro-valor-9').value, 10);
  let valorVenda = parseFloat(document.getElementById('segundo-valor-9').value, 10);
  let valorCustoTotal = valorCusto + valorCusto * 20 / 100;
  let lucro = valorVenda - valorCustoTotal;

  return document.getElementById('resultado-9').value = lucro * 1000;
}

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto
o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */
document.getElementById('botao-10').addEventListener('click', calculaSalarioBruto);

function calculaSalarioBruto() {
  let salarioBruto = parseFloat(document.getElementById('valor-10').value, 10);
  let salarioInss;

  if (salarioBruto <= 1556.94) {
    salarioInss = salarioBruto - salarioBruto * 8 / 100;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioInss = salarioBruto - salarioBruto * 9 / 100;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioInss = salarioBruto - salarioBruto * 11 / 100;
  } else if (salarioBruto > 5189.82) {
    salarioInss = salarioBruto - 570.88;
  }

  let impostoIr;
  let salarioIr;

  if (salarioInss <= 1903.98) {
    salarioIr = salarioInss;
  } else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
    impostoIr = (salarioInss + (salarioInss * 7.5 / 100)) - salarioInss - 142.80;
    salarioIr = salarioInss - impostoIr;
  } else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
    impostoIr = (salarioInss + (salarioInss * 15 / 100)) - salarioInss - 354.80;
    salarioIr = salarioInss - impostoIr;
  } else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
    impostoIr = (salarioInss + (salarioInss * 22.5 / 100)) - salarioInss - 636.13;
    salarioIr = salarioInss - impostoIr;
  } else if (salarioInss >= 4664.68) {
    impostoIr = (salarioInss + (salarioInss * 27.5 / 100)) - salarioInss - 869.36;
    salarioIr = salarioInss - impostoIr;
  }

  let salarioLiquido = salarioIr;

  return document.getElementById('resultado-10').value = salarioLiquido;
}
