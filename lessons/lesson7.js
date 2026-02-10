/* Lesson 7 - Conditional Statements */

// if statement
/* A condition is checked. When false
the if block is ignored. */
function ifExample(num) {
    console.log('Before if statment');
    if (num >= 10) {
        console.log(`Value of ${num} is larger than 10`);
    }
    console.log('After the if statement');
}

//ifExample(10);

/* If with else will allow for a false
condition to also execute a block of code. */
function elseExample(value) {
    if(value == 'JavaScript') {
        console.log(`${value} is true`);
    } else {
        console.log(`${value} is false`);
    }
}
//elseExample('Javascript');

// Example 2 for if/else
function oddOrEven(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

//oddOrEven(8);

// If/Else chain
function elseIfExample(num5) {
    if(num5 <= 5) {
        console.log(`${num5} is less than 5`);
    } else if(num5 <= 10) {
        console.log(`${num5} is less than 10`);
    } else if(num5 <= 15) {
        console.log(`${num5} is less than 15`);
    } else {
        console.log(`${num5} is more than 15`);
    }
}

//elseIfExample(18);

// Using Logical Operator &&
function logicalAndExample(value1, value2) {
    if(value1 == 10 && value2 > 10) {
        console.log('Both conditions are true');
    } else {
        console.log('One or more condition is false');
    }
}

//logicalAndExample(11, 11);

// Using Logical Operator ||
function logicalOrExample(value3, value4) {
    if(value3 <= 9 || value4 > 20) {
        console.log('One of the conditions is true');
    } else {
        console.log('Both conditions are false');
    }
}

//logicalOrExample(19, 1);

// Using Logical Operator !
function logicalNotExample(value5) {
    if(!(value5 == 'Happy' || value5 === 'Happy')) {
        console.log('I am happy');
    } else {
        console.log('I am not happy');
    }
}

//logicalNotExample('Happy');

/* Ternary Operator ?: - A shorthand
if/else statement. */
const example = (able) => (able > 10) ?
`${able} is greater` : `${able} is less`;

// console.log(example(2));

function example2(able) {
    if(able > 10) {
        return `${able} is greater`;
    } else {
        return `${able} is less`;
    }
}

// console.log(example2(2));

// Switch statement
function favoriteColor(color) {
    switch(color) {
        case 'Blue':
            console.log('My favorite color is Blue');
            break;
        case 'Red':
            console.log('My favorite color is Red');
            break;
        case 'Green':
            console.log('My favorite color is Green');
            break;
        default:
            console.log(`My fav color is ${color}`);
            break;
    }
}

//favoriteColor('Blue');

// Switch using Annoumous function
const favoriteColor2 = (color) => {
    switch(color) {
        case 'Blue':
            return 'My favorite color is Blue';
        case 'Red':
            return 'My favorite color is Red';
        case 'Green':
            return 'My favorite color is Green';
        default:
            return `My fav color is ${color}`;
    }
}

console.log(favoriteColor2('Red'));