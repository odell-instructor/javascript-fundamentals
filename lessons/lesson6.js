/* Lesson 6 - Operators */

/* Addition & Subtraction */
function exampleAddSubtract(num1, num2) {
    const add = num1 + num2;
    const sub = num2 - num1;

    console.log(`Addition ${add}, 
    Subtraction ${sub}`);
} // end function

/* Multiply and Divide */
function exampleMultiplyDivide(num3, num4) {
    const mul = num3 * num4;
    const div = num4 / num3;

    console.log(`Multiply ${mul}
     Divide ${div}`);

} // end function

exampleAddSubtract(7, 12);

exampleMultiplyDivide(4, 14);

/* Modulus */
/* Displays the remainder of a division problem */
function exampleModulus() {
    const answer1 = 10 % 4;
    const answer2 = 12 % 3;

    console.log(`1st is ${answer1}
    2nd is ${answer2}`);

} // end function

/* Exponentation */
/* The raising to the power of. */
function exampleExponent(value) {
    const answer3 = 2 ** value;
    console.log(answer3);

} // end function

exampleModulus();
exampleExponent(5);

/* PEMDAS */
/* 
Parenthesis
Exponents
Multiply & Divide
Addition & Subtraction
This is for Order of Operation in Math
 */
function mathOrder() {
    const total = 10 / (3 + 2) * 4 + 5 ** 2 + 6 - 9;
    console.log(`Math order ${total}`);
} // end function

mathOrder();

/* Assignment Operator */

function additionAssign() {
    let numAdd1 = 5;
    let numAdd2 = 10;
    numAdd1 += numAdd2;
    // numAdd1 = numAdd1 + numAdd2;
    console.log(`Addition Assignment Operator ${numAdd1}`);
} // end function

function subtractAssign() {
    let numSub1 = 20;
    let numSub2 = 8;
    numSub1 -= numSub2;
    console.log(`Subtraction Assignment Operator ${numSub1}`);
} // end function

function multiplyAssign(num5, num6) {
    num5 *= num6;
    console.log(`Multiply Assignment Operator ${num5}`);
} // end function

function divideAssign(num7, num8) {
    num7 /= num8;
    console.log(`Divide Assignment Operator ${num7}`);
} // end function

additionAssign();
subtractAssign();
multiplyAssign(4, 7);
divideAssign(12, 4);

function modulusAssign(num9) {
    num9 %= 34;
    console.log(`Modulus Assignment Operator ${num9}`);
} // end function

const exponentAnswer = function(value6, powerOf) {
    return value6 **= powerOf;
} // end function


modulusAssign(22);
console.log(`Exponent ${exponentAnswer(12, 3)}`);

/* Comparison Operators */
/* These evaluate to either true or false */
function compareExample(value1, value2) {
    const isSame = value1 == value2;
    const isOtherSame = value1 === value2;
    const isDifferent = value1 != value2;

    console.log(`is same ${isSame} is other same ${isOtherSame}
    is different ${isDifferent}`);

} // end function

// Arrow function with Greater Than
const greater = (value3, value4) => value3 > value4;

compareExample(10, '10');
console.log(`Comparison Operator Greater ${greater(15, 9)}`);

/* Logical Operators */
function logicalExample(num10, num11) {
    const able = num10 < 10 && num11 > 1;
    const beta = num10 === 5 || num11 == 5;
    const charlie = !(num10 == num11);

    console.log(`Able = ${able} Beta = ${beta}
    Charlie = ${charlie}`);
} // end function


logicalExample(6, 3);

/* Increment Operator */
function incrementExample() {
    let delta = 10;
    const sum = delta++;
    console.log(`Increment Post - delta: ${delta}, sum: ${sum}`);

    let echo = 5;
    const sum2 = ++echo;
    console.log(`Increment Pre - echo: ${echo}, sum2: ${sum2}`);

} // end function

incrementExample();

// delta = 10    delta++ we are saying delta = delta + 1;

/* Decrement Operator */
function decrementExample() {

    let foxtrot = 10;
    const sum3 = foxtrot--;
    console.log(`Decrement Post - foxtrot: ${foxtrot}, sum3: ${sum3}`);

    let hotel = 5;
    const sum4 = --hotel;
    console.log(`Decrement Pre - hotel: ${hotel}, sum4: ${sum4}`);

} // end function 


decrementExample();

