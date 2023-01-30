function Garage(gOwner, gCars) {
    this.owner = gOwner;
    this.cars = gCars;

    this.showGarageInfo = function(){
        console.log(`Garage characteristics: \n owner: ${JSON.stringify(this.owner)} \n cars: ${JSON.stringify(this.cars)}`);
    }
}

const garage1 = new Garage(personObj1, [carObj1, carObj2]);
const garage2 = new Garage(personObj2, carObj3);

garage1.showGarageInfo();
garage2.showGarageInfo();

