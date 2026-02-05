/* Lesson 5 - Functions and Scope */

/* Functions are a building block
of JavaScript. They are first class objects */

// Basic Function
function hello() {
    console.log('Hello JavaScript');
}

function helloYou(name) {
    return `Hello ${name}`;
}

//console.log(hello());
//console.log(helloYou('Clark Kent'));

/* Function Expression - Anonymous defined
function assigned to a variable  */
const squareFoot = function(length, width) {
    return length * width;
}

//console.log(squareFoot(24, 32));

/* Global Scope */
/* Variables can have local or global scope.
Global means everyone can see it vs
local, which is contained withing function scope. */
function scopeSample1() {
    able = 32; // <-- global
    let beta = 'Hello'; // <-- local
    console.log(beta);
}

function scopeSample2() {
    // able has no defined declaration
    // is global by default
    console.log(able);

    // local scope beta results in a Reference error
    // console.log(beta);
}

//scopeSample1();
//scopeSample2();

/* Nested Functions */
/* Functions inside of functions. Inner function
has access to the scope of the outer function.
Outer functions do not have access to inner 
function scope. */
function outerScope(value1) {
    let charlie = 20;
    function innerScope() {
        let total = charlie + value1;
        console.log(total);
    }
    // call inner scope
    innerScope();
}

// Cannot call inner scope from here
//outerScope(10);

/* Closure */
/* A way for a function to have private variables
using an anonymous function with a nested
function */
const addFive = function() {
    let total = 0;
    return function() {
        total += 5; 
        // total = total + 5
        return total;
    }
}();

//addFive();
//addFive();
//console.log(addFive());

/* Default Parameters */
function subtractThis(num1, num2 = 10) {
    return num1 - num2;
}

//console.log(subtractThis(15, 4));
//console.log(subtractThis(34));

const subtractMe = function(num5, num6 = 20) {
    return num5 - num6;
}

//console.log(subtractMe(34, 12));

/* Rest Parameter - Allows for indefinite number
of arguments as an array (group of data) */
function groupSample(...args) {
    console.log(args);
}

//groupSample(75,'Hello', 'Thursday', 'Where\'s', 'the weekend?');

/* Arrow functions are a compact
 version of a function expression */

 // Traditional Anonymous Function
 const add100 = function(value) {
    return value + 100;
 }

 // Arrow Function with 1 parameter
 const add100Arrow = value => value + 100;

 //console.log(add100(7));
 //console.log(add100Arrow(7));

 // Functions with 2 parameters
const div10 = function(num1, num2) {
    return num1 + num2 / 10;
}

const div10Arrow = (num1, num2) => num1 + num2 / 10;

//console.log(div10(23, 64));
//console.log(div10Arrow(23, 64));

// Function with no parameter
const div3 = function(){
    return 10 + 5 / 3;
}

const dive3Arrow = () => 10 + 5 / 3;

//console.log(div3());
//console.log(dive3Arrow());

// Function with default parameters
const addThis = function(num5, num6 = 40) {
    return num5 + num6;
}

const addThisArrow = (num5, num6 = 40) => num5 + num6;

//console.log(addThis(3, 12));
//console.log(addThis(3));

//console.log(addThisArrow(3, 12));
//console.log(addThisArrow(3));

// Functions with rest parameter
const addThese = function(value1, ...args) {
    return value1 * args[0];
}

console.log(addThese(2, 2, 4, 6, 8, 10));

const addTheseArrow = (value1, ...args) => value1 * args[1];
console.log(addTheseArrow(2, 2, 4, 6, 8, 10));