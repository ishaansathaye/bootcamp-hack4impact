## Bootcamp #5: React Basics
---
## React Basics
### What is React?
- Why we are learning React:
    - Industry standard among full stack developers
    - Helps eliminate tedious repetition, organize code more efficiently and isolate functionality
    - Lets you update certain parts of a website without refreshing the whole thing
- React is one of the most powerful **frontend** tools 
- Javascript library for building interfaces
    - focuses on component based development
    - high scalable
## What is JSX?
- Crossover between HTML and JS
- JSX is React's language
    - file type similar to .css or .js
    - essentially allows us to write HTML in our JS file
    - Example: 
    ```html
    const element = <h1> Hello, world<h1>;
    const math = <p> Two plus three is {2 + 3}</p>
    ```
- Turning DOM manipulation into JSX
    - Used DOM to dynamically change, create, and update content on our page
    - By using JSX, we can write HTML and DOM manipulator in the same file
    - example:
    ```jsx
    const sayHello = () => console.log("hello!")
    ```
- New JSX syntax
    - function calls and variables can be inserted into HTML elements with curly braces {}
    - if working with multiple elements inside JSX make sure to keep them inside an individual container (div)
    - example:
    ```jsx
    const userNameElement = {
        <div>
        <div>
    }
    ```
---
## React and React Components
### What is a component?
- Similar to JSX elements we have shown so far
- Groups of reusable code with a specific purpose
- **Allow us to define our own custom HTML elements**
### Why are components useful?
- Help eliminate repetition since you can use components multiple times so you only need to code something (recipe page) one time
- Organize our page into sections by grouping display and functionality
- Good for writing code spanning many pages
- Can be individually rendered and updated
### How does React help with rendering?
- React allows to render individual components instead of whole page
- When certain data is updated then React will automatically update
- Can also force React to re-render when needed
### Types of Components
- Functional
    - Simply JS functions that return JSX
    - Need to use hooks to mimic more complex class behavior
    ```jsx
    function ShoppingCart(props) {
        return <p>Number of items: {props.num}</p>
    }
    ```
- Class Based
    - Defined as classes that can hold multiple functions
    - Uses a render() method to return JSX
    ```jsx
    function ShoppingCart extends React.Component {
        render () {
            return <p>Number of items: {this.props.num}</p>
        }
    }
    ```
### Some Quirky React/JSX syntax
- JSX has slightly different syntax than HTML
- Images and css have to be imported
- Images should be stored in the public folder
- Class becomes className
- ```onclick="doSomething" -> onClick={doSomething}```
- Make sure react component names are capitalized
---
## Props
- How Components Get Information
### Parent and Child Components
- Websites built using React usually ave a tree structure linking different components together
- Parent components are the top of the tree
    - Child is the inner layer
### What are Props?
- Variables used inside React components that retrieve data passed from parents
- passing props is similar to passing different inputs to a function
- Parent component contains the child component, passing data to its props
