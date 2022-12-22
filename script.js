// 1.

const arr = ['a', 2, 5, 7, 3, 'Hanna', true, null, 89, '23222'];
const onlyNumbers = arr.filter(element => typeof element === 'number');

const getAverage = (onlyNumbers) => {
    let sum = 0;
    onlyNumbers.forEach (value => { sum += value;});
    return sum / onlyNumbers.length;
};
console.log(getAverage(onlyNumbers));
    
// 2.

const x = +prompt('Enter the firsth digit:');
const y = +prompt('Enter the second digit:');
const operation = prompt('Enter one of theese mathematical operation signs: +, -, *, /, %, ^ ');

function doMath(x, y, op) {
    calculator = {
        '+': (x + y),
        '-': (x - y),
        '*': (x * y),
        '/': (x / y),
        '^': (x ^ y),
        '%': (x % y)
    }
return (calculator[op]);
}
console.log(doMath(x, y, operation.trim()))

// 3.

let twoDimensionalArray = [];
const rows = parseInt(prompt('How many rows', '3'));
const cols = parseInt(prompt('How many columns', '3'));

function createArray() {
    let initial = 1;
    let value;
    for(var i = 0; i < rows; i++){
        twoDimensionalArray.push([]);
            for(let j = 0; j < cols; j++, initial++){
                    value = +prompt('row ' +(i+1)+' col '+(j+1)+' = ', initial);
                    twoDimensionalArray[i].push(value);
            }
    }
}
createArray();
console.log(twoDimensionalArray);

// 4.

let phrase = prompt('Enter any phrase like Hello, world');
const input = prompt('Enter the letters you want replace');

function removeCharacters(text, characters) {
    for(i = 0; i < text.length; i++) {
        text = text.replaceAll(characters[i], '');
    }
    return text;
}

removeCharacters(phrase, input);
console.log(removeCharacters(phrase, input));