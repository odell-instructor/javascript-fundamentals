# Lesson 4 - All about Numbers

Number is represented as both a primitive and an Object
A primitive is the following:
- Declaritive type: let, var, const
- variable name
- literal assigned

### What is a Number?
- Numbers that can be both positive and negative
- Are considered floating-point values.
    - Values that are not whole numbers, but are fractional
- A number can only have 17 decimal places of precision
- The largest number is 1.8E308

### What is BigInt?
- Like number, it represents both a primitive and an Object
- It consists of whole number values only
- Not designed to replace number
- Uses the suffix n, so it is recognized as that type
- Cannot be used with the Math Object
- Designed for values larger than the number type

### The Numeric System
- A system that represents a base set of numbers.
- There are 4 numbers systems
    - Binary: A base 2 system that consists of 0 and 1 values and is prefixed with 0b or 0B
    - Decimal: A base 10 system that consists of 0 - 9 values and is what we use for normal numbers
    - Octal: A base 8 system that consists of 0 - 7 values and is prefixed with 0o or 0O
    - Hexadecimal: A base 16 system that consists of 0 - 9 & A - F values and is prefixed with 0x or 0X

### Exponents
- Allow us to represent large values that don't take a large amount of space
- It uses a format called beN
    - b is a number
    - e or E is the base number (exponent)
    - N is the value of the exponent
- The N determines which direction the decimal point can be moved in a given number set.
    - -N means the decimal point moves to the left
    - +N means the decimal point moves to the right
    - Any empty spaces during the move are replaced with a 0

### Numeric Separators
- Using the underscore, we can adjust the number literal, so it is more readable to humans.
- Has no effect on the literal itself
- Canno be used between a prefix of a numeric system, the end of a value, or next to the decimal point.

### Number Object
- Has a set of methods and properties; Static and Instance
- Instance number methods and properties are accessible through the primitive using dot notation.
    - Dot notation is using the period after the variable
- Static number methods and properties are accessible through the Number object using dot notation

### BigInt Object
- Has a set of methods; static and instance
- Instance BigInt methods are accessible through the primitive using dot notation
- Static BigInt methods are accessible through the BigInt Object using dot notation

### Coercion
- The concept of converting a bigInt to a number
- The result is a lost of precision
- Recommended that you don't use BigInt for values within the scope of a number