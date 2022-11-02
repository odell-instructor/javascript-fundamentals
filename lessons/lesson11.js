/* Lesson 11 - Classes and Objects */

/* Traditional style for creating an object */
const myHouse = new Object();
myHouse.foundation = 'Concrete';
myHouse.windowSize = '20';
myHouse.doorColor = 'White';
myHouse.roofType = 'Composite';

console.log(myHouse.foundation);

/* Object initializer version */
const house = {
    foundationStyle: 'Dirt',
    windowInchSize: 30,
    houseColor: 'Tan',
    roofTileType: 'Shingle'
};

console.log(house.houseColor);

house['foundationStyle'] = 'Concrete';
console.log(house['foundationStyle']);

house['houseColor'] = 'Hunter Green';
house['roofTileType'] = 'Steel Shingle';

/* Variables created to assign to an object
separated by commas */
const something = {},
    str = 'secondString',
    rand = Math.random(),
    myObj2 = {};

/* creating additional properties for something */
something.type = 'Dot syntax for a key called type.';
something['date issued'] = 'key has a space';
something[str] = 'Key is second string';
something[rand] = 'Random number becomes the key';
something[myObj2] = 'Key is object myObj2';
something[''] = 'Key is an empty string';

console.log();
console.log(something);
console.log(something.secondString);
console.log(something[rand]);

/*dynamically create properties using initializer version */
const able = Math.random();
const beta = 'my beta';

const happy = {
    [able]: 'Some number',
    [beta]: 'just another string'
};

console.log(happy);
console.log(happy[able]);

/* Using a for...in loop to iterate over the
properties of the something object */
function showSomething(obj, objName) {
    let result = '';
    for(const i in obj) {
        /*obj.hasOwn method is used to exclude properties
        from the object's prototype chain, and only show
        our defined properties */
        if(Object.hasOwn(obj, i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}

console.log();
showSomething(something, 'something');

/* Constructor function called Person */
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const peter = new Person('Peter', 'Parker'); // Marvel Comics
const hal = new Person('Hal', 'Jordan'); // DC Comics

console.log(hal.lastName);

/* Constructor function called Truck */
function Truck(make, model, year, color, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
}

const myTruck = new Truck('Chevy', 'Silverado', 2016, 'Black', peter);
const oldTruck = new Truck('Ford', 'F150', 1985, 'White', hal);

console.log(oldTruck.model);
console.log(myTruck.owner);
console.log(myTruck.owner.firstName);

const tempConvert = {

    fahrenheitToCelsius: function(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    },

    celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

};

console.log();
console.log(tempConvert.fahrenheitToCelsius(32));
console.log(tempConvert.celsiusToFahrenheit(15));

/* Object Review */
const watch = {
    displayType: 'Manual',
    displayTime: 'Printed',
    carried: 'Pocket',

    watchSound() {
        console.log('The watch ticks per second.');
    }

};

console.log(watch.displayType);
watch.watchSound();

/* Class declaration */
class Rectangle {
    #height;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    } // end constructor

    /* getters */
    get height() { return this.#height; }
    get width() { return this.#width; }

    /* setters */
    set height(height) {
        this.#height = height;
    } // end set height

    set width(width) {
        this.#width = width;
    } // end set width

    /* Method */
    calculatedArea() {
        return this.#height * this.#width;
    } // end method

} // end class

const myShape = new Rectangle(20, 40);
console.log(myShape.height);
myShape.height = 25;
console.log(myShape.height);

/* method output */
console.log(myShape.calculatedArea());

/*
When we build an object, or class, think of these as
a blueprint to create object references, or objects of
the blueprint.
*/

class Boat {
    constructor(color, engineType) {
        this.color = color;
        this.engineType = engineType;
    } // end constructor

    move() {
        console.log(`Moving on the water using ${this.engineType}`);
    } // end method

} // end class

/* Child class */
class SailBoat extends Boat {
    constructor(color, engineType, fuel) {
        super(color, engineType);
        this.fuel = fuel;
    } // end constructor

    explore() {
        console.log('Exploring the world');
    } // end method

} // end class

const myBoat = new Boat('Red', 'outboard motor');
myBoat.move();

const mySail = new SailBoat('White', 'Sail', 'air');
mySail.move(); // from parent
mySail.explore(); // from child
console.log(mySail.color);

/* child method is not accessible from the parent. */
// myBoat.explore(); // let's see if this works