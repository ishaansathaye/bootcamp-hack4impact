## Bootcamp #4: JavaScript and Node
---
## Javascript and HTML
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
---
## NODE and NPM
### What is Node?
- Node is a computer program that allows us to run JS files directly on the computer
- Enables developers to write all code for the frontend and the backend
### What is NPM?
- Stands for Node Package Manager
- Package manager allows you to us open source prices of code that people have put on the internet for free
- Size of these packages can vary from a single function to a framework
### Popular NPM packages
- ```React``` - makes frontend easier
- ```Express``` - makes backend easier
- ```Lodash``` - collection of utility functions
- ```eslint``` and prettier - code styling helpers
- ```Jest``` - testing library for JS
- ```Moment``` - date math and formatting
- ```Chalk``` - allows you to style terminal messages
- Is-odd - **please do not ever use this!**
## Setting up NPM
- Run ```node -v``` and ```npm -v``` in the terminal to make sure you have both installed
- Run ```npm -y``` in current project directory
### What are all of the files?
- package.json -> grocery list of all packages you have installed for this project
- package-lock.json -> list of all packages you have installed (your dependencies and your dependencies' dependencies)
- node_modules -> where all you packages are going to installed
### How to use NPM?
- ```npm install <package-name>```
- ```npm install```: download all packages in package.json you do not already have
- ```npm unistall <package-name>```: remove packages
- When using ```npm``` with Github, do not push your ```node_modules``` folder to Github
- Good idea to run ```npm install``` after to ```git pull``` in case any new dependencies were added 

