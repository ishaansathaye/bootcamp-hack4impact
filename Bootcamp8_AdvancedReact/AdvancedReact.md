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
    - Defined as classes that can hold mulitple funcitons
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
- Why not just use class compoennts?
    - Unintuitive syntax: function binding and ``this`` keyword
    - Larger than functions and load slower
### State
- What is State?
    - How we handle changing content on webpage
    - Whenever state changes -> React refreshes
    - Established with the ```useState``` hook