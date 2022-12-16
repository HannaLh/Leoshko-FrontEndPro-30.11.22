const products = [
    {name: 'Apple', price: 20},
    {name: 'Cherry', price: 10},
    {name: 'Banana', price: 15},
    {name: 'Orange', price: 25},
    {name: 'Lemon', price: 17},
    {name: 'Pear', price: 30}
];

const GRN_PER_DOLLAR = 41;
const DISCOUNT_START_FROM = 10000;
const DISCOUNT = 20;

function showList(arr) {
    for (let prodId = 0; prodId < arr.length; prodId++) {
        console.log(`${prodId + 1} ${arr[prodId].name} ${arr[prodId].price}`);
    }
}

function userInputProdNum() {
    let prodNum;

    do {
        prodNum = +prompt('Write product number:');

        if (prodNum === null) {
            break;
        }
        prodNum--;
    } while (prodNum < 0 || prodNum > products.length - 1 || isNaN(prodNum));

    return prodNum;
}

function userInputProdAmount() {
    let prodCount;

    do {
        prodCount = +prompt('Write product count:');

        if (prodCount === null) {
            break;
        }
    } while(prodCount <= 0 || isNaN(prodCount));

    return prodCount;
}

function calcProdSum(prodCount, prodPrice) {
    if (typeof prodCount === 'number') {
        const totalProdPrice = prodCount * prodPrice;

        console.log(`Total price: $${totalProdPrice}`);

        if (totalProdPrice * GRN_PER_DOLLAR > DISCOUNT_START_FROM) {
            console.log(`Congrats, you get a discount ${DISCOUNT}%`);
            console.log(`Your total price is: ${totalProdPrice * (100 - DISCOUNT) / 100}`);
        }
    }
}

function main() {
    showList(products);

    const prodNum = userInputProdNum();
    const prodCount = userInputProdAmount();

    if (typeof prodNum === 'number') {
        const product = products[prodNum];
        console.log(product);
        calcProdSum(prodCount, product.price);
    }
}

main();