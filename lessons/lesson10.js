/* Lesson 10 - Map & Set Collections */

// Create a map using the set method
const courses = new Map();
courses.set('JS-101', 'Foundations of JavaScript');
courses.set('C#-101', 'Foundations of CSharp');
courses.set('JA-101', 'Foundations of Java');
courses.set('PT-101', 'Foundations of Python');
courses.set('RR-101', 'Foundations of Ruby on Rails');
courses.set('IWD-101', 'Introduction to Web Development');

// Map using an Array type syntax
const pizzaSpecials = new Map([
    [10, 'Combination'],
    [20, 'All Meat'],
    [30, 'Supreme'],
    [40, 'Cheese'],
    [50, 'Gluten Free'],
    [60, 'Pepperoni']
]);

// create a map in a function
function getDays() {
    const week = new Map();
    week.set(1, 'SUN');
    week.set(2, 'MON');
    week.set(3, 'TUE');
    week.set(4, 'WED');
    week.set(5, 'THU');
    week.set(6, 'FRI');
    week.set(7, 'SAT');

    return week;
}

// clear instance method
function exampleClear() {
    console.log(`The courses map is ${courses.size} in size`);
    courses.clear();
    console.log(`After clear, the size is ${courses.size}`);
}

//exampleClear();

// delete instance method
function exampleDelete() {
    console.log(`The number of pizza specials is ${pizzaSpecials.size}`);
    let remove = pizzaSpecials.delete(10);
    let remove2 = pizzaSpecials.delete(50);
    console.log(`'Removing combo ${remove} & Gluten ${remove2}`);
    console.log(`The new number of pizza specials is ${pizzaSpecials.size}`)
}

//exampleDelete();

// get and has instance methods
function exampleGetHas() {
    let today = getDays().get(3);
    console.log('Today is '+ today);

    console.log(getDays().has(6));
}

//exampleGetHas();

// entries instance method
function exampleEntries() {
    const values = courses.entries();
    //console.log(values);
    console.log(values.next().value);
    console.log(values.next().value);
    console.log(values.next().value);
   
}

 //exampleEntries();

// forEach method
function exampleForEach() {
    courses.forEach(courseElements);
}

// Callback Function
function courseElements(value, key) {
    console.log(`${key} - ${value}`);
}

// exampleForEach();

// forEach using inline function
function exampleForEachV2() {
    Array.from(courses.entries()).forEach(
        ([key,value]) => {
            console.log(`${key} - ${value}`);
        }
    );
}

//exampleForEachV2();

/* Create a set and get its size */
const scores = new Set([10, 12, 15, 17]);

function getScoreSize() {
    return scores.size;
}

//console.log(getScoreSize());

/* Create a set using the add instance method */
function createLetterSet() {
    const letters = new Set();

    // add values
    letters.add('A');
    letters.add('B');
    letters.add('C');
    letters.add('D');
    letters.add('E');
    letters.add('F');

    for(const alpha of letters) {
        console.log(alpha);
    }
}

//createLetterSet();

// demonstrate no duplicates
function noDuplicateExample() {
    const alphabet = new Set();

    // add values
    alphabet.add('A');
    alphabet.add('B');
    alphabet.add('C');
    alphabet.add('C');
    alphabet.add('D');
    alphabet.add('C');

    for(const letter of alphabet) {
        console.log(letter);
    }
}

//noDuplicateExample();

// clear instance method removes the elements only
function exampleSetClear() {
    console.log(`The scores set is ${scores.size}`);
    scores.clear();
    console.log(`After clear, the scores size is ${scores.size}`);
}

//exampleSetClear();

// delete method removes the value from a set
function exampleSetDelete() {
    let myScore = scores.delete(15);
    console.log(myScore);

    for(score of scores) {
        console.log(score);
    }
}

// exampleSetDelete();
/* forEach method of a Set.
Callback function uses 3 parameters
(value, key, set)
*/

function logSetElements(value1, value2, set){
    console.log(`set[${value1}] = ${value2}`);
}

function exampleSetForEach() {
    scores.forEach(logSetElements);
}

//exampleSetForEach();

/* union method takes a set and 
returns a new set containing elements of both */
function exampleSetUnion() {
    const updateScores = new Set([20, 23, 26]);
    const moreScores = scores.union(updateScores);

    for(score of moreScores) {
        console.log(score);
    }
}

// exampleSetUnion();

/* intersection method returns a new set
 based on the intersection of 2 sets */
 function exampleSetIntersection() {
    const scores2 = new Set([12, 15, 22, 23]);

    const intersect = scores.intersection(scores2);
    for(values of intersect) {
        console.log(values);
    }
 }

 // exampleSetIntersection();