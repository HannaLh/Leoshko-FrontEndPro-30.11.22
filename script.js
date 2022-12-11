const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumPositivNum = 0,
amountPositiveNum = 0,

minNum = 0,
minNumIndex = 0,

maxNum = 0,
maxNumIndex = 0,

amountNegativeNubmers = 0,

amountOddPositiveNum = 0,

evenPositiveNumAmount = 0,
sumEvenPositiveNum = 0,

sumOddPositiveNum = 0,

prodPositiveNum = 1,

maxNumberIndex = 0;


for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        sumPositivNum += arr[i];
        amountPositiveNum += 1;
        prodPositiveNum *= arr[i];

        if (maxNum < arr[i]) {
            maxNum = arr[i];
            maxNumIndex = i;
        }

        if(arr[i] % 2 === 0) {
            evenPositiveNumAmount += 1;
            sumEvenPositiveNum += arr[i];
        }
        if(arr[i] % 2 === 1) {
            amountOddPositiveNum += 1;
            sumOddPositiveNum += arr[i];
        }
    }
    if(arr[i] < 0) {
        amountNegativeNubmers += 1;

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

console.log(`1. Positive elements: ${sumPositivNum}; Positive amount: ${amountPositiveNum}`);
console.log(`2. Min number in array: ${minNum}; Min number index: ${minNumIndex}`);
console.log(`3. Max number in array: ${maxNum}; Max number index: ${maxNumIndex}`);
console.log(`4. Amount negative number in array: ${amountNegativeNubmers}`);
console.log(`5. Amount odd positive number in array: ${amountOddPositiveNum}`);
console.log(`6. Amount even positive number in array: ${evenPositiveNumAmount}`);
console.log(`7. Sum of even positive number in array: ${sumEvenPositiveNum}`);
console.log(`8. Sum of odd positive numbers: ${sumOddPositiveNum}`);
console.log(`9. Product of positive numbers: ${prodPositiveNum}`);
console.log(arr);