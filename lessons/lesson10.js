/* Lesson 10 - Map Collection */

const courses = new Map();
courses.set('JS-101', 'Foundations of JavaScript');
courses.set('C#-101', 'Foundations of C#');
courses.set('JA-101', 'Foundations of Java');
courses.set('PT-101', 'Foundations of Python');
courses.set('RR-101', 'Foundations of Ruby on Rails');
courses.set('IWD-101', 'Introduction to Web Developement');

/* Create a map in a function */
function getDays() {
    const week = new Map();
    week.set(1, 'SUN');
    week.set(2, 'MON');
    week.set(3, "TUE");
    week.set(4, 'WED');
    week.set(5, 'THU');
    week.set(6, 'FRI');
    week.set(7, 'SAT');

    return week;
} // end function

/* get the number of map pairs */
const courseMapSize = courses.size;
console.log(courseMapSize);

const daysMapSize = getDays().size
console.log(daysMapSize);

console.log();

/* clear instance method */
function exampleClear() {
    console.log(`The course map is ${courseMapSize} in size`);
    courses.clear();
    console.log(`After clear, the course map size is ${courses.size}`);
} // end function

// exampleClear();

/* delete instance method */
function exampleDelete() {
    console.log(`The days of the week are ${getDays().size} in total`);
    let days = getDays();
    let remove1 = days.delete(1);
    let remove2 = days.delete(7);
    console.log(`Removing SAT ${remove1} & Removing SUN ${remove2}`);
    console.log(`Our work days are ${days.size} in total`);
} // end function

// exampleDelete();

/* get and has instance methods */
function exampleGetHas() {
    let course1 = courses.get('JS-101');
    let course2 = courses.get('AWS-101');
    console.log(`Course 1 is ${course1}. Course 2 is ${course2}`);

    console.log(courses.has('JS-101'));
    console.log(courses.has('AWS-101'));
} // end function

// exampleGetHas();

/* keys instance method */
function getDayKeys() {
    let daysMap = getDays();
    let mapKeys = daysMap.keys();

    console.log(mapKeys);

    for(let myKey of mapKeys) {
        console.log(myKey);
    }

} // end function

 getDayKeys();

/* Entries */
/* Returns an iterator object containing a two-member array for each element */
function getEntries() {
    let values = courses.entries();
    console.log(courses.entries());

    
    // iterate using a for...of loop
    for(let course of values) {
        console.log(course);
    }

} // end function

 // getEntries();

/* forEach instance method */

// Callback function
function weekElement(value, key) {
    console.log(`${key} is for ${value}`);
} // end function

// forEach method
function weekForEach() {
    let myDays = getDays();
    myDays.forEach(weekElement);
} // end function

// weekForEach();