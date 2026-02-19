# Lesson 6 - Operators

### Arithmetic Operators
- Handle basic mathematical operations
- These calculate from left to right
- Follow the PEMDAS order of operations

#### Modulus Operator
- Represents the remainder from a division calculation
- If no remainder, the value is 0

#### Exponentiation Operator
- Represents a value raised to the power of the second value

#### PEMDAS
- Parenthesis
- Exponent
- Multiplication
- Division
- Addition
- Subtraction
- The multiplication and division are considered the same in priority, so the priority is based on the left most operator.
- The addition and subtraction are considered the same in priority, so the priority is based on the left most operator

### Assignment Operators
- These operators assign values to variables. 
- The arithmetic assignment operators re-assign the values back to one of the original variables defined. Instead of creating a new variable.

### Comparison Operators
- These operators compare two values
- The result will either be true or false
- Commonly used in conditionals statements
- The Ternary expression is an alternative to control flow

#### The == & != Operator
- These comparison operators evaluate the value being compared and not its type.

#### The === & !== Operator
- These comparison operators evaluate the value and the type it represents.
- Considered to be strict in nature

#### The >, <, >=, <= Operator
- These comparison operators operate the same in programming as in arithematic operations, by determining numbers to other numbers

### Logical Operators
- These operators allow you to combine two or more comparison operators in one statement.
- Like comparison operators, they return a true or false result.

#### The && operator
- Both comparison operands have to be true, for this operator to be true

#### The || operator
- Only 1 comparison operand has to be true, for this operator to be true

#### The ! operator
- This operator will reverse the result for either an Logical Operator or a comparison operator
- For best results, you may need to wrap your logical or comparison operators in ().

### The Increment Operator
- This Arithematic Operator increments its operand by 1
- Is supported in two forms
    - (post)++ will cause the value to be calculated first, then the increment happens.
    - ++(pre) will cause the value to increment first, then the value is calculated.

### The Decrement Operator
- This Arithematic Operator decrements its operand by 1
- Is supported in two forms
    - (post)-- will cause the value to be calculated first, then the decrement happens.
    - --(pre) will cause the value to be decremented first, then the value is calculated.