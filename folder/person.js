function Person(pName, pAge) {
    this.name = pName;
    this.age = pAge;

    this.personShowInfo = function() {
        console.log(`Person characteristics: \n name: ${this.name} \n age: ${this.age}`);
    }
}

const lettersRegExp = /[a-zA-Z]/g;

const createPerson = () => {
    const name = prompt("Enter the first name");
    let age;
    let result;
    switch (!!name || name){
        case null:
            alert('Please fill in name');
            break;
        case '':
            alert('Please fill in name!!!');
            break;
        case !lettersRegExp.test(name): 
            alert('dont put a number');
            break;
        default:
            age = parseInt(prompt("Enter the person's age"));
    }
    switch(!!age || age){
        case null:
            alert('Please fill in age');
            break;
        case '':
            alert('Please fill in age!!!');
            break;
        case isNaN(+age):
            alert('Please fill in number');
            break;
        case age<18:
            alert('You cannot own a car under 18 y.o');
            break;
    }
    return result = new Person(name, age);
}
createPerson;

const personObj1 = createPerson();
const personObj2 = createPerson();

personObj1.personShowInfo();
personObj2.personShowInfo();
