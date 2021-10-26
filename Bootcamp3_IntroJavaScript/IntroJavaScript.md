## Bootcamp #3: Intro to JavaScript

### What is JavaScript?
- Java is to Javascript as car is to carpet
    - Nothing similar between them
### Why learn Javascript?
- Programming language used y all browsers
- Makes you webpage interactive
- Great at handing data, listening for events, and general programming
### Variables
- Two ways to declare variables:
```javascript
let x = 5;
const y = 5;
```
- Let variables can change; const variables cannot
- May also see ```var z = 5```, which is older way of declaring var similar to let
### Data Types Overview
- Number
- String
- Boolean
- Undefined: ```let x:```
- Null: ```let x = null```
- Array
- Objects 
### Numbers
- Includes integers and real numbers
- Also include infinity, -infinity, and NaN (not a number)
    - Doing something wrong if encounter this
- JS supports standard math operators
    - increment (--)
    - decrement (++)
    - remainder (%)
- To force a decimal to be an int, use Math.floor() or Math.round()
### Strings
- Can be written with 'single quotes; or "double quotes"
- Use varName.length to get the length of the string
- Printing: ```console.log()```
- Combine variables and strings using template literals
    - Back tick: `
### Booleans
- Either true or false
- Falsy: values that are considered false
    - Includes False, 0, "", Null, Undefined, NaN
- Truthy: values that are considered true
- Supports logical and (&&) or (||) not (!)
### Comparing Values
- === to compare, not ==
- === is type sensitive while == is not
    - 4 == "4" is true
    - 4 === 4 is false
- Also can use conditional operators
### Arrays
- Have dynamic length, similar to python
```javascript
let numbers = [4, 10, 12]
numbers.push(16) -> numbers with 16 at end
```
- JS Quirks
    - Use array destructuring to create multiple variables using values from array
    ``` let [a,b,c] = [10,20] -> a = 10, b = 20```
    - You can use the spread operator (...) to dump the contents of one array into another
### Objects
```javascript
let student = {
    name: "Jane Smith",
    major: "Computer Science",
    year: 2,
    emplID: 123456789
};
student.name;
student.age;
let {year} = student -> year = 2
let sCopy = {...student};
```
### JSON vs. Objects
- Objects are used when writing JS
- JSON is used when transmitting Data
- JSON is supported by all programming languages
- Gp from JSON to JS and back: 
``` JSON.prase() and JSON.stringify()```
### General Notes
- Semicolons are optional, but be consistent
- Has if statements, for loops, for...of loops, while loops, and functions
- Can import or export functions or variables
---
## Functional Programming
- Pure functions: same input -> same output
    - Does not mutate input
- Avoid mutable data
    - Do not change data given to you, instead make a copy and mutate that
- Be declarative, not imperative
    - Write code concisely shows what you are doing, not how you are doing it
### Writing Functions in JS
```javascript
Function addSeven (x){
    return x+7;
}
//Arrow Functions:
const addSeven = (x) -> {
    return x+7;
} 
//OR Implicit Return
const addSeven = (x) -> x + 7;
//OR (remove parens for 1 input
const addSeven = x -> x + 7;
```
### Using Functions as Values
- find: returns first element where f(x) is true
- findIndex: returns index of first element is true
- map: returns a new array created by calling f(x) on each element in the original array
- filter: returns a new array containing only the values where f(x) returns true
```javascript
a = [5,2,10,8]
a.find(x =>x > 7) -> 10
a.findIndex(x +> x < 3) -> 1
a.map(x => x+3) -> [8,5,13,11]
a.filter(x => x % 2 === 0) -> [2, 10, 8]
```
