// 1 Дано два різних числа. Виявити яке з них більше, а яке менше.

const num1 = +prompt('Enter 1st digit');
const num2 = +prompt('Enter 2nd digit');

if (num1 > num2) {
    alert('1st digit is bigger than 2nd digit');
} else if (num2 > num1) {
    alert('2nd digit is bigger than 1st digit');
} else {
    alert('Digits are equal');
}

// 2 Відомо дві дистанції. Одне в кілометрах, інше в футах(1 фут - 0,305м). Яка дистанція менша?

let distance1 = +prompt('Input distance #1 in kilometers');
let distance2 = +prompt('Input distance #2 in foots');

distance1 *= 1000;
distance2 /= 3.281;

if (distance1 > distance2) {
    alert('Distance 1 is bigger than distance 2');
} else if (distance2 > distance1) {
    alert('Distance 2 is bigger than distance 1');
} else {
    alert('Both distances are equal');
}

// 3 Виявити чи деяке число а є дільником числа b ? І навпаки. (Дати 2 відповіді)

const a = +prompt('enter number 1');
const b = +prompt('enter number 2');

if (a % b === 0) {
    alert('a is a divisor for b');
} else if (b % a === 0) {
    alert('b is a divisor for a');
} else {
    alert ('The number is not a divisor');
}

// 4 Вивести на сторінку в одну строку через зап’яту числа від 10 до 20

let result = '';

for (let i = 10; i <= 20; i++) {
    result += i + ', ';
}

console.log(result);

//5 Вивести квадрати чисел від 10 до 20

for (let i = 10; i <= 20; i++) {
    console.log(`the square of number ${i} = ${i*i}`);
}

//6 Вивести таблицю множення на 7

for (let i = 1; i <= 9; i++) {
    console.log(`${i} * 7 = ${i*7}`);
}

// 7 Знайти середнє арифметичне всіх цілих чисел від 1 до 500 

let totalSum = 0;
const meanEndValue = 500;

for (let i = 1; i <= meanEndValue; i++) {
    totalSum += i;
}

console.log(totalSum / meanEndValue);

// 8 Знайти добуток усіх цілих чисел від 15 до 35

let totalSum = 1n;

for (let i = 15n; i <= 35n; i++) {
    totalSum *= i;
}

console.log(totalSum);

// 9 Вивести суму тільки парних чисел в діапазоні від 30 до 80

let totalSum = 0;

for (let i = 30; i <= 80; i++) {
    if (!(i % 2)) {
        totalSum += i;
    }
}

console.log(totalSum);

//10 Вивести всі числа в діапазоні від 100 до 200 кратні 3

let result = '';

for (let i = 100; i <= 200; i++) {
        if (i % 3 === 0) {
            result += i + ', ';
        }
    }
    
console.log(result);