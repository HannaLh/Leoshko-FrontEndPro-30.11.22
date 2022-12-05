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

let str = '';

for (let number = 10; number <= 20; number++) {
    str += number + ', ';
}

console.log(str);

//5 Вивести квадрати чисел від 10 до 20

for (let num = 10; num <= 20; num++) {
    console.log(`the square of number ${num} = ${num*num}`);
}

//6 Вивести таблицю множення на 7

for (let num = 1; num <= 9; num++) {
    console.log(`${num} * 7 = ${num*7}`);
}

// 7 Знайти середнє арифметичне всіх цілих чисел від 1 до 500 

totalSum = 0;

for (let num = 1; num <= 500; num++) {
    totalSum += num;
}

console.log(totalSum / 500);

// 8 Знайти добуток усіх цілих чисел від 15 до 35

let totalSum = 1n;

for (let num = 15n; num <= 35n; num++) {
    totalSum *= num;
}

console.log(totalSum);

// 9 Вивести суму тільки парних чисел в діапазоні від 30 до 80

let totalSum = 0;

for (let num = 30; num <= 80; num++) {
    if (!(num % 2)) {
        totalSum += num;
    }
}

console.log(totalSum);

//10 Вивести всі числа в діапазоні від 100 до 200 кратні 3

let str = '';

for (let num = 100; num <= 200; num++) {
        if (num % 3 === 0) {
            str += num + ', ';
        }
    }
    
console.log(str);