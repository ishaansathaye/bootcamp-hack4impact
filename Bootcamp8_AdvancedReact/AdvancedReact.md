## Bootcamp #8: Advanced React (State and Hooks)
---
### Review:
- Functional
    - Simply JS functions that return JSX
    - Need to use **hooks** to mimic more complex class behavior
    ```jsx
    function ShoppingCart(props) {
        return <p>Number of items: {props.num} </p>;
    }
    ```
- Class Based
    - Defined as classes that can hold multiple functions
    - Uses a ```render()``` method to return JSX
    ```jsx
    class ShoppingCart extends React.Component {
        render () {
            return <p>Number of items {this.props.num} </p>;
        }
    }
    ```
### Hooks - Upgrading Functional Components
- Why Hooks?
    - Hooks allow us to use many more class component features, like state and lifecycle methods, in functional components
    - They are specialized React functions that give us some of there class-based behavior
- Why not just use class components?
    - Unintuitive syntax: function binding and ``this`` keyword
    - Larger than functions and load slower
### State
- What is State?
    - How we handle changing content on webpage
    - Whenever state changes -> React refreshes
    - Established with the ```useState``` hook
- Use State Syntax
```jsx
let[stateVariable, setVariable] = useState(initialValue) //initialValue can be any data type
```
- Uses array destructuring
- ```stateVariable``` is a **read only** variable
```setStateVariable``` -> function that accepts a new value ofr count
    - Calling the function causes React to rerender
#### Notes on UseState
- **Import using** ```import {useState} from "react";```
- ```useState``` must be called inside in the component (best practice is to put it at the top)
- Typical variable naming scheme: ```[state, setState]```
- Cannot mutate state directly when your state is nested data such as arrays or objects:
```jsx 
setIngredients([...ingredients. "apple"]); 
```