// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let result = '';

for (let i = 20; i <= 30; i += 0.5) {
    result += i + ' ';
}

console.log(result);

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const HRYVNA_PER_DOLLAR = 27;

for (let i = 10; i <= 100; i += 10) {
    let dollarToHryvna = `${i} USD = ${HRYVNA_PER_DOLLAR * i} UAH`;
    console.log(dollarToHryvna);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let number = +prompt('Enter the integer');

for(let i = 1; i <= 100; i++) {
    let squareOfNumber = i*i;
    if (squareOfNumber <= number) {
        console.log(i);
    }
}

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const number = +prompt('Enter any integer bigger than 1');

if (number > 1) {
    for (let i = 2; i <= number; i++) {
        if (number % i === 1 || number === 2) {
            alert(`${number} is a prime number`);
            break;
        } else if (number % i === 0) {
            alert(`${number} isn't a prime number`);
            break;
        }
    } 
} else {
    alert("Enter the number greater than 1");
}

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number = +prompt('Enter any positive number');
let powerOfThree = 3 ** 1;

while (powerOfThree <= number) {
    if (number === powerOfThree) {
        alert('We got this number by raising 3 to the power');
        break;
    }
    powerOfThree *= 3;
}