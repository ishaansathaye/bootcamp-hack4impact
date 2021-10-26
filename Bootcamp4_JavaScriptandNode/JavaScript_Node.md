## Bootcamp #4: Intro to JavaScript

### Understanding the DOM
- DOM - document object model
    - represents HTML in a way that JS can access and manipulate it
    - HTML is represented as a tree
- To connect your JS to HTML include the following in the head of HTML: ```<script type="text/javascript" src=<filename>></script>```
### Getting HTML Elements
- To pick an element from the DOM use the following: 
    - ```document.getElementById(), document.getElementsByClassName(), document.querySelectorAll()```
### Event Listeners
- Allow you to run code on certain events such as a click, scroll, or keypress
- Syntax: ```targe.addEventListener(type: String, listener: Function)```
```javascript
const myButton = document.getElementById("myButton")
myButton.addEventListener('click', (event))
```
- Easier Way:
    - ```<button onclick = "doSomething()"> Cick me!</button>```
    - Popular event listeners
        - onmouseover
        - onblur
        - onload
### Changing Content
- You can get or set the text in a DOM element using the textContent field
- Can add or remove elements from t he DOM using ```createElement(), appendChild(), and removeChild()```
### Changing Styling
- Similar to changing content with textContent, you can change css with the style attribute
### Getting User Input
- Accept input from the users using the ```<input> and <textarea>``` tags
- Can change how the input tag looks using the type attribute and setting it to different options such as date, number, or checkbox
- Can wrap all inputs in the ```<form>``` tag (for a lot of inputs)
- Get current value: ```document.getElementByID("name").value```
- Generally a good practice to validate all user user input with own JS logic
