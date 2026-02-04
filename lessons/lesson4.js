/* Lesson 4 - All about Numbers */

// Number Examples
let value1 = 42;
let value2 = 56.8;
let value3 = -89.5;

// 17 decimal point precision
let value4 = 3.08642357641427643;

// BigInt Examples w/suffix of n
let value5 = 3477194754940991n;
let value6 = 256n;

// Numeric Systems based type values
// Some require a prefix to use otherwise, 
// they default to decimal
// Each represent the value of 52
let binaryValue = 0b110100;
let octalValue = 0o64;
let decimalValue = 52;
let hexValue = 0x34;

console.log(`Binary value is ${binaryValue}
    Octal value is ${octalValue}
    Decimal value is ${decimalValue}
    Hexadecimal value is ${hexValue}`);

// Exponent Literals
let expoNum1 = 0E-3; // Output: 0
let expoNum2 = 0E+5; // Output: 0
let expoNum3 = 4E2; // Output: 400
let expoNum4 = 234e-2; // Output: 2.34
let expoNum5 = 2e-3; // Output: 0.002

console.log(expoNum4);

// Numeric Separators for readability
let numSeparator1 = 10_340;

let numSeparator3 = 0b1010_0001; // binary
let numSeparator4 = 0xA0_B0C0; // Hexadecimal

console.log(numSeparator4);

/* Static Properties are accessed from the 
object type Number, not a primitive. */
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

/* Static Methods are accessed from the object
type Number, and can have primitives passed into them */
console.log(Number.isNaN(expoNum5));
console.log(Number.isInteger(numSeparator3));
console.log(Number.parseInt('3456'));

/* Instance methods are methods that are
accessible from the primitive */
console.log(value4.toExponential());
console.log(value2.toFixed(4));
console.log(expoNum4.toPrecision(15));
console.log(value4.toPrecision(15));

/* Static BigInt */
let valueSample = BigInt.asIntN(32, value5);
console.log(valueSample);