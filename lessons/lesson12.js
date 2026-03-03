/* Lesson 12 - Concurrency */

/* Concurrency is a concept of 
Asynchronous programming */

/* Callbacks - An asynchronous function
that calls back after the execution completes */

const note = function() {
    console.log('This note will show in 3 seconds.');
}

//setTimeout(note, 3000);

setTimeout(function() {
    //console.log('Anonymous note in 4 seconds');
}, 4000);

function myCallback() {
    console.log('This message will show in 3.');
}

//setTimeout(myCallback, 3000);

setTimeout(() => {
    //console.log('Arrow function in 3');
}, 3000);

/* Create our own callback example */
function score(grade) {
    switch(grade) {
        case 'A':
            console.log(`You got an ${grade}, awesome`);
            break;
        case 'B':
            console.log(`You got an ${grade}, nice`);
            break;
        case 'C':
            console.log(`You got an ${grade}, good`);
            break;
        case 'D':
            console.log(`You got an ${grade}, lets do better`);
            break;
        default:
            console.log(`You got an ${grade}, you need to study`);
            break;
    }
}

/* This switch uses expression different than
standard switches. This is achieved by passing
the boolean true into the switch. Because of this
we can use comparison operators */
function getGrade(value, callback) {
    let gradeValue;
    switch(true) {
        case value >= 90:
            gradeValue = 'A';
            break;
        case value >= 80:
            gradeValue = 'B';
            break;
        case value >= 70:
            gradeValue = 'C';
            break;
        case value >=60:
            gradeValue = 'D';
            break;
        default:
            gradeValue = 'F';
            break;
    }
    callback(gradeValue);
}

//getGrade(75, score);

/* Promise - An object that is eventual
or failure of asynchronous operation  */
let myPromise = new Promise((resolve, reject) => {
    let able = 20;

    // set delay
    setTimeout(() => {
        if(able > 10) {
            resolve(able);
        } else {
            reject('Promise value not high enough');
        }
    }, 5000);
});

myPromise.then(value => {
    console.log('Success Promise of: '+ value);
}).catch(error => {
    console.log(error);
});

//console.log(myPromise);

/* Async / Await - An asynchronous function that
enables promise-based behavior in a cleaner way
that doesn't need the promise chains. */

function delayForAMoment(delta) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Asynch Resolved ${delta}`);
        }, 4000);
    });
}

async function myAsync(echo) {
    console.log('Calling delay');
    const result = await delayForAMoment(echo);
    console.log(result);
}

//myAsync('Now');
//myAsync('Shortly');
//myAsync('Soon');

/* Example based on the book. Page 353
Practice Exercise 13.3 */

let counter = 0;

function myReadyCounter(count) {
    return new Promise(resolve => {
        setTimeout(() => {
            counter++;
            resolve(`Counter ${counter}, Value ${count}`);
        }, 1000)
    })
}

async function myCounter(myCount) {
    console.log(`Global counter ${counter}, Argument value ${myCount}`);
    const result = await myReadyCounter(myCount);
    console.log(result);
}

for(let i = 0; i < 10; i++) {
    myCounter(i);
}