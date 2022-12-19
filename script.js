function calcSumm(value, power) {
    if (power === 0) {
        return 1;
    } else {
        return value * calcSumm(value, power-1);
    }
}

console.log(calcSumm(3, 4));