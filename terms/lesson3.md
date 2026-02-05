# Lesson 3 - All about Strings

String is represented as both a primitive type and an Object
A primitive is the following:
- Declarative type: let, var, const
- variable name
- literal assigned

### What are Strings?
- A sequence of characters and considered a primitive type
- String is also a reserved word
- string data (literal) is enclosed by single or double quotes

### String Object
- Has a set of methods and properties; Static and Instance
- Instance String methods and properties are accessible through the primitive using dot notation.
-   Dot notation is using the period after the variable.
- Static String methods are accessible throught the String Object using dot notation.

### Bracket Notation
- Using [] after a variable, allows you to obtain a single character from that variable.
- It is a zero-based index, which means the first character in the string is at postion 0 instead of 1.
- Entering a number value with the [] provides us with the character at that position.
- If you enter a value that is outside the number of characters, you will get a return of Unknown
- Whitespace (empty spaces) in a string, count as characters.

### Long Strings
- Can be broken up into multiple lines for readability using either a + or /.
- The plus breaks up the string into multiple smaller strings.
    - This means you have to enclose each small string with single or double quotes
    - This is also a form of Concatenation
- The \ backslash allow the string to use it original defined single or double quotes.

### Concatenation
- The joining of strings and expresssions together
- Uses the + operator to join each string together into a single unit
- You can also add numbers in this way, as long as it includes a string.

### String Interpolation
- The construction of dynamic strings by embedding expressions or variables directly within a string literal
- This is achieved using Template Strings

### Template Strings
- Strings enclosed using the backtick ` character instead of double or single quotes
- These kind of strings can replace long string in conjunction with new line escape sequences
- Are also used with placeholder text
- If you use this type and place parts of it on separate lines, that separation is included with the output of the template string.
- Placeholders use the $ dollar sign followed by { } curly braces
    - The curly braces is where your placeholder goes

### Escape Sequences
- Some cases where you needs to use characters that are normally reserved
- Using the \ backslash and specific characters, they can be ignored as their normal use and be treated like a string.
- Some escape sequences don't add characters, but manipulate whitespace.

