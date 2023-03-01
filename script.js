class Dish {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.ingridients = [];
    }

    showPrice() {
        return `Price of ${this.name} is ${this.price}`;
    }

    showCalories() {
        return `Calories of ${this.name} is ${this.calories}`;
    }

    addIngridient(ingridient) {
        this.ingridients.push(ingridient);
        this.addCalories(ingridient.calories);
        this.calculatePrice(ingridient.price);
    }

    removeIngridient(ingridient) {
        this.ingridients.splice(ingridient, 1);
    }

    showIngridients() {
        for(let i = 0; i < this.ingridients.length; i++) {
            console.log(this.ingridients[i].name);
    }
    }

    addCalories(calories) {
        this.calories += calories;
    }

    removeCalories(calories) {
        this.calories -= calories;
    }

    calculatePrice(price) {
        this.price += price;
    }
}

class Hamburger extends Dish {
    constructor(size, price, calories, component) {
        let ingridients = [component];
        super('Hamburger', price, calories, ingridients)
        this.size = size;
    }
}

class Food {
    constructor(name, price, weight, calories, formFactor, state){
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.calories = calories;
        this.formFactor = formFactor;
        this.state = state;
    }

    setPrice(price){
        this.price = price;
    }

    setWeight(weight){
        this.weight = weight;
    }

    setFormFactor(formFactor){
        this.formFactor = formFactor;
    }

    setState(state){
        this.state = state;
    }

    addCalories(calories){
        this.calories += calories;
    }

    removeCalories(calories){
        this.calories -= calories;
    }
}

const cheese = new Food('cheddar', 10, 100, 20, 'sliced', 'melted');
const potatoe = new Food('fries', 15, 50, 10, 'julienne', 'hard');
const lettuce = new Food('butterhead', 20, 100, 5, 'shredding', 'hard');
const spice = new Food('basilic', 15, 2, 0, 'ground', 'hard');
const mayo = new Food('mayo', 20, 10, 5, 'regular', 'regular');

const bigHamburger = new Hamburger('big', 100, 40);
const smallHamburger = new Hamburger('small', 50, 20);

bigHamburger.addIngridient(mayo);
bigHamburger.addIngridient(potatoe);
bigHamburger.addIngridient(lettuce);
console.log(bigHamburger);




