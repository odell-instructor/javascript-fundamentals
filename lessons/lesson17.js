/* Lesson 17 - Errors, Stack Traces and Exception Handling */

/* Reference Errors - Try to access a
variable that hasn't been declared. */
//console.log(able);
// able was not defined

/* Type Errors - Happen when a value is
not the expected type */
let value = 42;
//console.log(value.toUpperCase());
// type doesn't match the method. 

/* if(value = '62') {
    console.log('They are equal');
} */
/* if value is a const, you will get
an error, let or var, will result as true */

/* Syntax error - Missing a syntax in the code */
//console.log('Hello, JavaScript';

/* Range error - when a value is out 
of range, like passing a invalid number */
let arr = Array(5); // valid limit
arr[0] = 20;
arr[1] = 22;
arr[2] = 23;
arr[3] = 24;
arr[4] = 26;

//console.log(arr);

//let arr2 = Array(-1); // invalid length
//console.log(arr2);

/* Stack Trace */
//const thirdExample = 'Something';

function thirdExample() {
    console.log('This works now');
}

function secondExample() {
    thirdExample();
}

function firstExample() {
    secondExample();
}

//firstExample();

/* Exception Handling - Try/Catch/Finally */
function divisionExample(num1, num2) {
    try {
        let result = num1 / num2;
        if(!isFinite(result)) {
            throw new Error('Cannot divide by zero');
        }
        console.log(result);
    } catch(error) {
        console.error('Error occurred: ', error.message);
    } finally {
        console.log('Finally is called');
    }
}

//divisionExample(10, 0);

/* Exception handling - Throwing a custom error */
function doorMan(age) {
    if(age < 21) {
        throw new Error('You must be over 21 to enter this club');
    }
    console.log('Welcome to the club');
}

function enterClub(age) {
    try {
        doorMan(age);
    } catch (error) {
        console.error(error.message);
    }
}

enterClub(16);