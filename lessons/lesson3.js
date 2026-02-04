/* Lesson 3 - All about Strings */

// Declare a string using double quotes
let carType = "Camero";
let carAction = "They move fast";

// Declare a string using single quotes
let truckType = 'Silverado';
let truckAction = 'They haul stuff';

// Use bracket notation on a variable of string
// brack notation is a zero-based index
console.log(carType[6]);
// Output: Undefined

console.log(truckAction[5]);
// Output: h

// A long sentence using the + operator
let longExample1 = 'Lorem ipsum dolor ' +
'sit amet, consectetur adipiscing elit.' +
' Sed sagittis auctor ex vel aliquam.' +
' Vestibulum ac lorem auctor, lacinia' +
' lectus non, tempor est. Vestibulum' +
' ante ipsum primis in faucibus orci ' +
'luctus et ultrices posuere cubilia ' +
'curae; Morbi quis leo mauris.';

// A long sentence using the \ backslash
let longExample2 = 'Ut quam eros, \
efficitur in nisi at, rhoncus dapibus\
 ante. Integer iaculis placerat\
 consequat. Curabitur congue porta\
 metus sit amet accumsan.';

 /* Using the + operator to concatenate
 multiple strings or other primitives
 together to create a new string. */
 let con1 = 'Hello ';
 let con2 = 'World';

 let combine1 = con1 + con2;
 let combine2 = con2 + 52;
 let combine3 = 'The ' + con2 + ' is vast';
 
 console.log(longExample2);
 console.log(combine2);
 console.log(combine3);

 // Template string Interpolation
 // Uses backtick instead of quotations
 console.log(`Vestibulum lacinia elit 
    leo, ut hendrerit purus mollis non.`);

// Template string with placeholders
// Uses $ dollar sign and {} curly braces
const VALUE1 = 10;
const VALUE2 = 20;

// Concatenation with expression
console.log('Thirty is ' +
    (VALUE1 + VALUE2) +
    ' and not ' + (2 * VALUE1 + VALUE2)
);

// Placeholder syntax with expression
let place1 = `Thirty is ${VALUE1 + VALUE2} 
and not ${2 * VALUE1 + VALUE2}`;
console.log(place1);

// Escape Sequence
let phrase = 'My name Roger O\'Dell. \tHow are\n you doing today';
console.log(phrase);

// Instance Property
// This type doesn't use () as part of its declaration
// It does use the primitive to access it.
let example = 'Lorem ipsum doloz sit amet ';
console.log(example.length);

/* Instance methods
These methods are accessible from the primitive and
return a whole new type rather than changing the 
existing one. */

// at() Returns a character at a specified index
console.log(example.at(3)) // output is e
console.log(example.at(-4)) // output is m

// charAt returns character at a specified index
console.log(example.charAt(6)); // output is i

// concat combines strings of 1 or more
console.log(example.concat(' ee','JavaScript'));
console.log(example.concat(' Hello'));

// includes determines if a searched value is in the statement
// Will return true or false
console.log(example.includes('olo')); // output is true

// indexOf returns the index number of the
// first occurrence of a searched value.
console.log(example.indexOf('o')); // output is 1

// slice returns a new string based on an index range
console.log(example.slice(2,5));
console.log(example.slice(10));

// split divides a string into a list
// of substrings based on a pattern
let exampleSplit = 'Lorem*ipsum*doloz&sit*amet';
let word = exampleSplit.split('*');
console.log(word[2]);

// toLowerCase returns the string in
//  lower case letters
console.log(example.toLowerCase());

// toUpperCase returns the string in 
// upper case letters
console.log(example.toUpperCase());

// trim removes the empty space from 
// the beginning and end of a string
console.log(example.trim());