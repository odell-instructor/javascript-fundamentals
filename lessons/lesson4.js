/* Lesson 4 - All about Numbers */

// Numbers Example
let value1 = 42;
let value2 = 34.4;
let value3 = -34.3;

// 17 decimal point precision
let value4 = 3.0864235764427643;

// BigInt values
let value5 = 3477194754940991n;
let value6 = 256n;

// Number Systems
let ex_binary = 0b11010; // binary number
let ex_hexadecimal = 0x1A; // hexadecimal number
let ex_octal = 0o32; // octal number

console.log(`Binary ${ex_binary}, Hexadecimal ${ex_hexadecimal}
 Octal ${ex_octal}`);

// Exponential literals
let aa = 0E-3; // 0 
let bb = 0E+5; // 0
let cc = 4E2; // 400
let dd = 234e-2 // 2.34
let ee = 2e-3; // .002

let ff = 56E-4; // .0056

// Exponents are considered 10 to the something power

// Numeric Separators - Using underscores for readabilty
let gg = 9_563.25;
let hh = 0b1010_0001;
let ii = 0XA0_B0_C0;

console.log(gg);
console.log(hh);
console.log(ii);


let value = '42';
let value12 = '35';
let combine10 = value + value12;
console.log(combine10);

/* Static properties of the Number Object */
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);


/* Static methods of the Number Object */
console.log(Number.isNaN(ff));
console.log(Number.isInteger(hh));

let verifyInt = Number.parseInt(value);
console.log(verifyInt + 5); // math addition

let verifyFloat = Number.parseFloat(value12);
console.log(verifyFloat + 10); // math addition


/* Instance method can be accessed from the variable */
console.log(value1.toExponential());
console.log(value2.toFixed(4));
console.log(value3.toPrecision(15));
