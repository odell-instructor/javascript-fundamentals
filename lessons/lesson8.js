/* Lesson 8 - Looping Statements */

/*
Most loops have 3 key factors
1. An initialized value - This is a variable
 that is set to 0 or a different number.
2. The condition - Typically a comparison operator that
evaluates to either true or false
3. The increment or decrement - This is used
to increase or decrease the value of the intialized variable.
*/

/* While loop */
/* This loop will continue as long as the condition is true.
The condition is checked before the body of the loop is executed */
function whileExample() {
    let value = 0;
    while(value < 10) {
        console.log(value);
        value++;
    } // end while
} // end function

//whileExample();

/* Do While loop */
/* This loop will begin by executing the block of code once.
Then, the condition is checked. If the condition is true,
the loop will continue until the condition is false. */
function doWhileExample() {
    let num = 0;
    do {
        console.log(num);
        num++;
    } while(num < 5)
    // end do while

} // end function

//doWhileExample();

/* for loop */
/* A more compact way to loop that uses the 3 key factors */
function forExample() {
    for(let index = 0; index <= 7; index++) {
        console.log(`Number is ${index}`);
    } // end for loop
} // end function

//forExample();

/* Display the even numbers from 0 to 20 */
function evenNumbers() {
    for(let num2 = 0; num2 <= 20; num2++) {

        if (num2 % 2 == 0) {
            console.log(`${num2} is even.`);
        }

    } // end for
} // end function

//evenNumbers();

/* break and continue statements */
function exampleBreakContinue() {

    for(let i = 0; i < 10; i++) {
        if(i === 2) {
            continue;
        } // end if

        if(i === 7) {
            console.log('Loop breaks');
            break;
        } // end if
        console.log(i);
    } // end for loop
    console.log('Loop ends');
} // end function

//exampleBreakContinue();

/* Label statement */
/* A label provides an identifier for a statement */
function exampleLabel() {
    let value2 = '';
    
    myLabel:
    for(let i = 0; i < 30; i++) {
        if(i % 2 == 0) {
            continue myLabel;
        } // end if

        value2 += (`${i}, `);
    } // end for loop

    console.log(value2);

} // end function

exampleLabel();