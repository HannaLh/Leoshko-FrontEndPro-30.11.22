
let arr = [16,-37, 54, -4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sumOfPositivDigits = 0,
positiveNum = 0,
negativeNum = 0,
oddNegativeNum = 0,
oddPositiveNum = 0,
sumOddPositiveNum = 0,
sumOddNegativeNum = 0,
prodPositivNum = 1,

maxNum = 0,
maxNumIndex = 0,

minNum = 0,
minNumIndex = 0,

maxNumberIndex = 0;


for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        sumOfPositivDigits += arr[i];
        positiveNum += 1;
        prodPositivNum *= arr[i];

        if (maxNum < arr[i]) {
            maxNum = arr[i];
            maxNumIndex = i;
        }

        if(arr[i] % 2 === 0) {
            oddPositiveNum += 1;
            sumOddPositiveNum += arr[i];
        }
    }
    if(arr[i] < 0) {
        negativeNum += 1;

        if(arr[i] % 2 === -1) {
            oddNegativeNum += 1;
            sumOddNegativeNum += arr[i];
        }

        if (minNum > arr[i]){
            minNum = arr[i];
            minNumIndex = i;
        }
    }

    if (arr[maxNumberIndex] > arr[i]) {
        arr[i] = 0;
    } else {
        arr[maxNumberIndex] = 0;
        maxNumberIndex = i;
    }
}

console.log(`1. Positive elements: ${sumOfPositivDigits}; Positive amount: ${positiveNum}`);
console.log(`2. Min number in array is ${minNum}; Min number index: ${minNumIndex}`);
console.log(`3. Max number in array is ${maxNum}; Max number index: ${maxNumIndex}`);
console.log(oddNegativeNum);
console.log(oddPositiveNum);
console.log(`Min element in array: ${negativeNum}, `);
console.log(sumOddPositiveNum);
console.log(sumOddNegativeNum);
console.log(prodPositivNum);
