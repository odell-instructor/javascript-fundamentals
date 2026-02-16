# Lesson 5 - Functions & Scope

### Functions
- A building block of JavaScript
- A first-class object
- Capable of having properties and methods inside (out of scope)
- Defined using the **function** keyword
    - Its name
    - Any parameters defined within parenthesis
    - Curly braces to represent the block/scope of the function
    - A **return** keyword when it needs to return data back to the caller
- Once a function is created, the statements within its scope are not executed, unless the function is called by name, and its parameters (if any) are supplied by arguments.
- Parameters defined in a function are separated by a comma for more than 1.

```javascript
function someName(params, params2, params3) {
    // statements go here
}
```

### Function Expression
- A function defined as if it was a literal
- Can be declared without a name, making it an anonymous.
- Assigned to a variable with a declaration
- The variable along with any function parameters is called for this function to execute.

``` javascript
const squareFoot = function(length, width) {
    return length * width;
}

console.log(squareFoot(24,32));
```

### Variable Scope
- Scope is the visibility of variables in an application.
- Can be local or global scope
- Global scope variables are accessible inside or outside a function
    - variables defined in a function with no declaration, are global in scope
    - Can be made local scope using closures in Nested Functions
- Local scope variables are accessible inside the function only.

### Nested Functions
- Functions inside of functions
- Inner functions can access scope of the outside function
- Outer functions do not have access to inner function scope

### Closure
- A way for a function to have private variables
- Using an anonymous function with a nested function

### Default Parameters
- Formal parameters defined in a function that are inialized with a value
- Are evaluated at the function call time
- Recommended to be defined after normal parameters.

### Rest Parameters
- Allow an indefinite number of arguments as an array to be passed in as a single variable
- Defined using 3 periods followed by a name (args)

``` javascript
function groupSample(...args) {
    console.log(args);
}

groupSample('Welcome', 'to', 'JavaScript');
```

### Arrow Functions
- An alternative way of writing a function expression
- Uses the **=> syntax** instead of the **function** keyword
- Can also omit the {} curly braces and () parenthesis in some cases, but require them in others.
- Cannot have a yield keyword in the body (discussed later)
- Cannot be used in conjunction with constructors (discussed later)