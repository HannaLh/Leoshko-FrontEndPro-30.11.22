const arrLength = +prompt('Enter a number, which is the length of array:');
let arr = [];

for (let num = 0; num < arrLength; num++) {
    let digit = +(prompt('Enter digit #' + (num + 1)));
    arr.push(digit);
}

console.log(arr);

const sortedArr = arr.sort(
    (firstEl, secondEl) => {
        if (firstEl > secondEl) {
            return 1;
        } else if (firstEl < secondEl) {
            return -1;
        }
        return 0;
    }
);

arr = sortedArr;
console.log(sortedArr);

arr.splice(1,3);
console.log(arr);