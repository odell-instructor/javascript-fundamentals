/* Lesson 6 - Operators */

// Basic Math
function basicMathExample(num1, num2) {
    const total = num1 + num2;
    const total2 = num2 - num1;
    const total3 = num1 * num2;
    const total4 = num2 / num1;
    console.log(`Answers for Addition ${total}, Subtraction ${total2},
        Multiplication ${total3}, and Division ${total4}`);
}

/* Modulus operator calculates the remainder of a
division problem */
function exampleModulus() {
    const answer1 = 10 % 4;
    const answer2 = 12 % 3;
    console.log(`First answer is ${answer1},
        and second one is ${answer2}`);
}

/* Exponentaiation is the raising 
to the power of */
const answer3 = function(expon){
    return 2 ** expon;
}

//basicMathExample(12, 46);
//exampleModulus();
//console.log(answer3(7));

/* PEMDAS
Parenthesis
Exponents
Multiply & Divide (from left to right)
Add & Subtact (from left to right) */
function mathOrder() {
    const total = 10 / (3 + 2) * 4 + 5 ** 2 + 6 - 9;
    const total2 = 10 / 3 + 2 * (4 + 5) ** 2 + 6 - 9;
    console.log(total + " and " + total2);
}

//mathOrder();

/* Assignment Operators - These operators
reassign value back to a variable instead of 
creating a new one. */
function additionAssign(){
    let num1 = 11;
    let num2 = 76;
    num2 += num1;
    console.log("Addition += "+ num2);
}

let value1 = 32;
let value2 = 64;

function subtractionAssign() {
    value2 -= value1;
    console.log("Subtraction -= "+value2);
}

function multiplicationAssign() {
    value1 *= value2;
    console.log("Multiplication *= "+value1)
}

function divisionAssign() {
    value2 /= value1;
    console.log("Division /= "+value2);
}

function modulusAssign(num) {
    let value = 23;
    value %= num;
    console.log("Modulus %= "+ value);
}

function exponentAssign(value, powerOf) {
    value **= powerOf;
    console.log("Exponent **= "+ value);
}

// additionAssign();
//subtractionAssign();
//multiplicationAssign();
//divisionAssign();
//modulusAssign(3);
//exponentAssign(12, 7);

/* Comparison Operators - Which provide a 
boolean response of true or false for each
operator. */
function compareExample(num1, num2) {
    const isSame = num1 == num2;
    const isOtherSame = num1 === num2;
    const isDifferent = num1 != num2;
    const isOtherDifferent = num1 !== num2;

    console.log(`Is same ${isSame},
        Is other same ${isOtherSame},
        Is Different ${isDifferent},
        Is other Different ${isOtherDifferent}`);
}

//compareExample(10, '10');

const greater = (first, second) => first > second;

const lesser = (third, fourth) => third < fourth;

const greaterEqual = (fifth, sixth) => fifth >= sixth;

const lesserEqual = (seventh, eighth) => seventh <= eighth;

//console.log(greater(15, 9));
//console.log(lesser(9, 15));
//console.log(greaterEqual(15,15));
//console.log(lesserEqual(6,6));

/* Logical Operators - Combine two or more
comparison operators */
function logicalExample(first, second) {
    const able = (first < 10 && second > 4);
    const beta = (first === 7 || second == 8);
    const charlie = !(first == second);
    console.log(`
        Able = ${able},
        Beta = ${beta},
        Charlie = ${charlie}`);
}

//logicalExample(8,8);
function logicalExample2(third, fourth) {
    const isValid = (third < 10 && fourth > 4) && (third === 7 || fourth == 8);
    console.log(`
        With more operators 
        comes more responsibility ${isValid}`);
}

//logicalExample2(6,7);

/* Increment - Value is increased by 1
pre - increments first before computation
post - computation goes first, then increments*/
function incrementExample() {
    let able = 33;
    const bravo = able++;
    console.log(`
        PostIncrement: 
        able ${able},
        bravo ${bravo} `);
}

//incrementExample();
function incrementPre() {
    let hotel = 45;
    const jay = ++hotel;
    console.log(`
        PreIncrement: 
        hotel ${hotel},
        jay ${jay} `);
}

//incrementPre();

/* Decrement - Value is decrease by 1
pre - decrements first before computation
post - computation goes first, then decrements*/
function decrementExample() {
    let able = 33;
    const bravo = able--;
    console.log(`
        PostDecrement: 
        able ${able},
        bravo ${bravo} `);
}

//decrementExample();
function decrementPre() {
    let hotel = 45;
    const jay = --hotel;
    console.log(`
        PreDecrement: 
        hotel ${hotel},
        jay ${jay} `);
}

decrementPre();