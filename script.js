function numbers() {
    let sum = 0;
    return function(number){
        sum += number;
        return sum;
    }
}

const sum = numbers();
console.log(sum(3));
console.log(sum(10));
console.log(sum(20));