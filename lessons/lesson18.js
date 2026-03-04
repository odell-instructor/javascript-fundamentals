/* Lesson 18 - Testing in JavaScript */

const firstName = 'Joe';
const height = 74; // inches
const message = `${firstName} is ${height} inches tall`;

function isEven(num) {
    if(num < 0) {
        throw new Error('Number must be positive');
    }
    if(typeof num !== 'number') {
        throw new Error('Value must be a number type');
    }
    return num % 2 === 0;
}

/* To export this file to another file */
module.exports = {firstName, height, message, isEven};