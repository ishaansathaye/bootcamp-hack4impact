## Bootcamp #5: HTTP, Express, and APIs
---
## HTTP
### What is HTTP?
- Making your computer extroverted
- So far we have learned frontend tools
    - Moving into middleware and backend
- HyperText Transfer Protocol
    - standard for communicating information across the web
### Important HTTP Vocabulary
- Client - program that acts on behalf of user and sends HTTP requests
    - browser is the client
- Server - program that serves the information requested by the client
- HTTP Request - request for information or services sent form client to server
- HTTP Response - response for information or services sent from server to client
### Structure of an HTTP Request
- Method - What you want your request to do (GET, POST, DELETE)
- Path - domain of your request (/recipes, /ingredients)
- Headers - additional information (some are pre populated)
- Body (not shown) - even more information (Often JSON)
### Structure of an HTTP Response
- Version, Headers, and Body are the same as before
- Status Code/Status Headers indicate success or failure
---
## Using APIs with HTTP
### What is an API?
- API is Application Programming Interface
- Allows us to use data from other websites and databases
- Most APIs use HTTP to communicate information
- API - what you use, HTTP - how you use it
---
## Using Fetch
### What is a Fetch Request?
- Common way to send or receive data from an API
- ```fetch()``` is a JS function that accepts a url string and an optional object and returns data from an API call
### Fetch Syntax
```js
fetch(url:String, options:Object)
//url is your api route (may also contain query parameters)
//options has a lot of options:
method:("GET"(default), "POST", "DELETE")
headers:Object(Content)
```
### What is Synchronous Code?
- Each line of code so far will not execute until the previous line
- Synchronous code can experience blocking
    - Occurs when a expensive (time-consuming) operation prevents the code after it from being run
- This is not good on websites since users always expect the site to be interactive (avoid loading screens)
- Fetch requests can take a second or two, so they were made asynchronous to prevent blocking
### What is Asynchronous Code?
- Allows JS to run other code during times where it would normally blocked
### How does JS handle Asynchronous Code?
- Asynchronous function is a function which returns a **Promise**
- Unhandled Promises
### ASYNC/AWAIT
- One way to handle a promise is with keywords ```async``` and ```await```
    - await - comes directly before the inner asynchronous function call
    - async - comes directly before the outer function declaration
- Example:
```js
const getAge = async () => {
    const name = "vance"l
    const age = await fetch(url);
    console.log(await age.json());
}
getAge();
```
### THEN
- Older way to handle async functions is with ```.then()```
    - function that immediately follows a promise
- Take a function as input in its parentheses
- Can chain multiple ```then``` statements together ```.then().then()```
- To catch rejected promises chain a ```.catch()``` at the end
- **Do not need the async/await keywords when using then**