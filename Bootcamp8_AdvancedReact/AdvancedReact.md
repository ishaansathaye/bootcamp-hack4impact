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
---
#### Notes on UseState
- **Import using** ```import {useState} from "react";```
- ```useState``` must be called inside in the component (best practice is to put it at the top)
- Typical variable naming scheme: ```[state, setState]```
- Cannot mutate state directly when your state is nested data such as arrays or objects:
```jsx 
setIngredients([...ingredients. "apple"]); 
```
---
- Passing State as a Prop
    - Can access state in a child component -> by passing it as a prop in the parent component
- **Forms in React**
    - Uncontrolled Components
        - similar to how input was used before
        - cannot simply instantly validate input
        ```js
        let ingredient = useRef(null);
        <input ref={ingredient} />
        console.long(ingredient.current.value)
        ```
    - Controlled Components (recommended)
        - input is stored in state
        more setup, more functionality
        ```js
        let [ingredient, setIngredient] = useState("");
        <input value={ingredient} onChange={handleChange} />;
        console.long(ingredient);

        function handleChange(event) {
            setIngredient(event.target.value)
        }
        ```
### Lifecycle Functions
- Class Components: mount = render, unmount = stop rendering
- ```useEffect()``` hook tells React that component needs to do something after render
    - handles code that has side effects
- ```useEffect()``` is where we will be making GET fetch requests
- **useEffect Syntax: {code}, [dependencies]**
```js
useEffect(() => {document.title = 'You clicked ${count} times';}, [count]); //Example
```
- Code runs when the effect is triggered
- Dependencies: controls when effect is triggered
    - None -> every render
    - [] -> initial render **(Used for fetching data)**
    - [var]: whenever var is updated, var is usually a prop or state
- Using Fetch with ```useEffect```
```js
let [ingredients, setINgredients] = useState([]);

useEffect(() => {
    const getIngredients = async () => {
        let data = await fetch("link");
        let ingredientData = await data.json();
        setIngredients(ingredientData);
    };
    getIngredients();
}, []);
```
### React Router
- Why need React Router?
    - Because react is a single-page application
    - Components are not complete html pages -> so cannot change components the same way we change pages
- Use node package react-router (using v6 syntax)
#### The Route Component
- Most react router  code goes inside ```App.js```
    - where you choose which urls route to which components
    ```js
    <Route path="/about" element={<About />}/>
    ```
    - path: the url the route should match
    - element: the component that should display at that route
#### Linking Pages
- No longer use ```<a>``` tags to navigate a site
- Use the ```<Link>``` tags:
```js
<Link to="/about">About</Link>
```
#### URL Parameters
- Common way to communicate data across pages 
```js
<Route path='recipe/:name' element={<Recipe />} />
```
- Router will match any word after the colon: ``/recipe/pasta```
- Can get the url parameter in the recipe component with the ```useParams``` hook
    - Can fetch data from the backend using unique id, ame, or url-slug
    ```js
    let param = useParams(0);
    console.log(param.name);
    ```