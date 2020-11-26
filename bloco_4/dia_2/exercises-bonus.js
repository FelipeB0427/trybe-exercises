let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Ordene o array numbers em ordem crescente e imprima seus valores. */
for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[i] < numbers[j]) {
            let pos = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = pos;
        }
    }
}

console.log(numbers);

/* Ordene o array numbers em ordem decrescente e imprima seus valores. */
for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[i] > numbers[j]) {
            let pos = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = pos;
        }
    }
}

console.log(numbers);

/* Agora você irá criar um novo array a partir do array numbers,
sem perdê-lo. Cada valor do novo array deverá ser igual ao valor
correspondente no array numbers multiplicado pelo seguinte. */
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = [];
let mult;

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        mult = numbers[j] * numbers[i];            
    }

    num.push(mult);

    if (numbers[i] == 27) {
        mult = numbers[i] * 2;
        num.push(mult);
    }
}

console.log(num);