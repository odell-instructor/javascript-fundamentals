/* Write a function named areAllNumbersEven 
that receives an Array of numbers as parameter, 
and returns a boolean indicating if all the 
numbers are even or not. */

function areAllNumbersEven(numbers) {

    let value = true;
    
    for (const num of numbers) {

        switch(num % 2) {
            case 0:
            case -0:
            case undefined:
                value = true;
                break;
            default:
                return  false;
        }
        
    }
    return value;
}

const numbers = [12, 22, 2, 40];



console.log(areAllNumbersEven(numbers));