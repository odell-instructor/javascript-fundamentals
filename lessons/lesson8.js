/* Lesson 8 - Looping Statements */

/* Most loops have 3 key factors
1. An initialized value
2. The condition
3. The Increment / Decrement */

// While Loop
function whileExample() {
    let value = 0;
    while(value < 10) {
        console.log(value);
        value++;
    }
}

//whileExample();

function whileExampleV2() {
    let word = "Something";
    let value = 0;
    while(value < word.length) {
        console.log(word.charAt(value));
        value++;
    }
}

//whileExampleV2();

// Do While Loop
/* This loop will begin by executing the block once.
Then the condition is checked. If the condition
is true, the loop will begin, Otherwise, the loop
will end. */
function doWhileExample() {
    let num = 0;
    do{
        console.log(num);
        num++;
    } while(num < 7)
}

//doWhileExample();

/* for loop */
/* A more compact loop that has all 3 key factors
in one line. */
function forExample() {
    for(let index = 0; index < 7; index++) {
        console.log(index);
    }
}

//forExample();

function forExampleV2() {
    let word = 'Something';
    for(let i = 0; i < word.length; i++) {
        console.log(word.at(i));
    }
}

//forExampleV2();

// for..of
function exampleOf() {
    let value = "Welcome to Lesson 8";
    for(const letter of value) {
        console.log(letter);
    }
}

//exampleOf();

/* label statment
A lable provides an identifier for a statement */
function exampleLabel() {
    let value2 = '';
    myLabel:
    for(let i = 0; i < 30; i++) {
        if(i % 2 === 0) {
            continue myLabel;
        }
        value2 += (`${i}, `);
    }
    console.log(value2);
}

//exampleLabel();

function exampleLabelV2() {
    var sum = 0;

    outerloop: while(true) {
        let a = 1;

        // inner loop
        innerloop: while(a < 3) {
            sum += a;
            if(sum > 12) {
                break outerloop;
            }
            console.log('sum = '+ sum);
            a++;
        }
    }
}

// exampleLabelV2();

function exampleLabelV3() {
    let outside5, inside5;

    loop1: for(outside5 = 0; outside5 < 5; outside5++) {
        loop2: for(inside5 = 0; inside5 < 5; inside5++) {
            if(outside5 === 1 && inside5 === 1) {
                console.log('Missing 1 and 1');
                continue loop1;
            }
            console.log(`
                outside loop = ${outside5},
                inside loop = ${inside5}`);
        }
    }
}

//exampleLabelV3();

/* break and continue */
/* Break ends the execution of the block of code
continue forgoes the remaining statements in the block
and starts the next iteration. */
function exampleBreakContinue() {
    for(let num = 0; num < 10; num++) {
        if(num === 2) {
            continue;
        }
        if(num === 7) {
            console.log('Loop Breaks');
            break;
        }
        console.log(num);
    }
    console.log('Loop Ends');
}

exampleBreakContinue();