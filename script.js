const arrLength = +prompt('Enter a number, which is the length of array:');
let arr = [];

for (let num = 0; num < arr.length; num++) {
    let digit = +(prompt('Enter digit #' + (num + 1)));
    arr.push(digit);
}

console.log(arr);

arr.sort();
console.log(arr);

arr.splice(1,3);
console.log(arr);