function Car(cColor, cModel) {
    this.color = cColor;
    this.brand = cModel;
    this.owner = NaN;

    this.carShowInfo = function(){
        console.log(`Car characteristics: \n color: ${this.color} \n brand: ${this.brand} \n owner: ${JSON.stringify(this.owner)}`);
    }
    this.addCarOwner = function(owner){
        this.owner = owner;
    }
}

const createCar = () => {
    const color = prompt("Enter the car color");
    let brand;
    let result;
    switch (color){
        case null:
            alert('Please fill in car color');
            break;
        case '':
            alert('Please fill in color, not cancel it!!!');
            break;
        case !lettersRegExp.test(color): 
            alert('Put a proper value');
            break;
        default:
            brand = (prompt("Enter the car brand"));
    }
    switch(brand){
        case null:
            alert('Please fill in car brand');
            break;
        case '':
            alert('Please fill in brand!!!');
            break;
        case !lettersRegExp.test(brand): 
            alert('Put a proper value');
            break;
    }
    return result = new Car(color, brand);
}
createCar;

const carObj1 = createCar();
const carObj2 = createCar();
const carObj3 = createCar();

carObj1.addCarOwner(personObj1);
carObj1.carShowInfo();

carObj2.addCarOwner(personObj1);
carObj2.carShowInfo();

carObj3.addCarOwner(personObj2);
carObj3.carShowInfo();



