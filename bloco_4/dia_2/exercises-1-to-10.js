/* Você irá utilizar esse array para realizar os exercícios do 1 ao 7. */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Nesse primeiro exercício, percorra o array imprimindo todos os valores
nele contidos com a função console.log(). */
for (let i = 0; i < numbers.length; i++) {
    console.log(`Pos: [${i}] | Val: ${numbers[i]}`);
}

/* Para o segundo exercício, você deve somar todos os valores contidos
no array e imprimir o resultado. */
let resultado = 0;

for (let i = 0; i < numbers.length; i++) {
    resultado += numbers[i];
}

console.log(`Valor Total: ${resultado}`);

/* Para o terceiro exercício, calcule e imprima a média aritmética
dos valores contidos no array. */
let contador = 0;

for (let i = 0; i < numbers.length; i++) {
    contador++;
}

let media = resultado / contador;

console.log(`Media: ${media}`);

/* Com o mesmo código do exercício anterior, caso valor final seja
maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja
imprima a mensagem: "valor menor ou igual a 20". */
if (media > 20) {
    console.log(`Valor maior que 20.`);
} else {
    console.log(`Valor menor ou igual a 20.`);
}

/* Utilizando for, descubra qual o maior valor contido no array e imprima-o. */
let maiorValor = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
}

console.log(`O Maior valor encontrado no array foi: ${maiorValor}`);

/* Descubra quantos valores ímpares existem no array e imprima o resultado.
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado". */
let contaImpar = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        contaImpar++;
    }
}

if (contaImpar != 0) {
    console.log(`Exitem ${contaImpar} números ímpares no array.`);
} else {
    console.log(`Nenhum valor ímpar encontrado.`);
}

/* Utilizando for, descubra qual o menor valor contido no array e imprima-o. */
let menorValor = maiorValor;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menorValor) {
        menorValor = numbers[i];
    }
}

console.log(`O Menor valor encontrado no array foi: ${menorValor}`);

/* Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado. */
let num = [];

for (let i = 1; i < 26; i++) {
    num.push(i);
}

console.log(num);

/* Utilizando o array criado no exercício anterior imprima o resultado da
divisão de cada um dos elementos por 2. */
for (let i = 0; i < num.length; i++) {
    console.log(num[i] / 2);
}
