# Lesson 7 - Conditional Statements

### What are Conditional Statements
- These are statements that will determine the flow of the program based on certain critera

### The If Statement
- This statement execute a block of code based on a condition
- The condition has to be true, for its block of code to execute.
- A false condition will cause the true block of code to be ignored

### The Else Statement
- This statement can follow an if statement
- It provides a block of code based on the false condition of an if statement

### Multiple If condtions using else if
- A chain of if statements can be combined using the else if statement
- The else if executes a block of code based on a condition, after the initial if statement condition is false.
- Multiple else if statements can be used, with the final statement being an else.
    This final else handles the false condition result of all conditions before it.

### Multiple Conditions using Logical Operators
- This operators can be used within an if statement to evaluate two or more conditions

### Ternary Operators
- This operator using the ?: syntax as a shortcut version of an if/else statement
`variableName = (condition) ? true : false`

### False Values
- There are values that are considered false by default in condition statements
    - false
    - undefined
    - null
    - 0
    - -0
    - NaN (Not a Number)
    - Empty String ('') or ("");

### The Switch Statement
- This statement lets you branch execution of code based on a value of an expression
- Uses case statements to evaluate the switch expression.
- A default statement is used when all defined case statements are false.
- A break statement is used for each case to leave the switch. If missing, the cases after the true, are also executed.
- You can use a return statement in place of a break.