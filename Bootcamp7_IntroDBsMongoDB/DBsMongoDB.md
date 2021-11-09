## Bootcamp #7: MongoDB & Mongoose
---
### What is a database?
- Allow us to store data for a long period of time
- Makes changes to the site persist even after you close and reopen a tab or refresh the page
- Popular database services include MongoDB, MySQL, DynamoDB (AWS), and Firebase (Google Cloud)
### WHat is MongoDB?
- NoSQL database that stores data in JSON documents
- Will be using MongoDB Atlas, which is a database-as-a-service for MongoDB
    - Do not have to worry about hosting the database, we can just connect to one hosted by a big company
### MongoDB Structure
- Data is stored in documents, which are grouped together into clusters
    - Documents: One JSON Object
        - Ex. Pasta Recipe
    - Collection: Group of Documents
        - Ex. Collection of Recipes
---
### CRUD Operations
- Set operations that you use to interact with a a database
- Stands for:
    - **Create, Read, Update, Delete**
#### Create
- Used to add a new document to a collection 
- Data flows from front-end to backend
- Usually uses POST http method
#### Read
- Takes data from your database and sends it to your frontend
- Usually uses GET http method
Can be a single document, a whole collection, or a query
#### Update
- Edits the fields on an existing document
- Typically uses PUT http method
#### Delete
- Removes a document from a collection
- Uses DELETE http method
---
### Postman
- Tool we use to test http requests without having to write fetch requests
- Can use the desktop version, IDE extension, or website
- Great for troubleshooting your sever code and visualizing data
---
### What is Mongoose?
- Another node package
- Gives us the functions needed to connect and interact without MongoDB database in our server
- Use node to host our server
- Helps us manage our data inside our code and when interacting with databases
### Where does Mongoose fit in?
- MongoDB - allows us to store data in the backend
- Mongoose - allows our API routes to connect to MongoDB
- Express - allows us to create API routes
- Fetch - allows us to send requests to those API routes
- React - allows us to display our website on the frontend
### Connecting to our DB
- Call ```mongoose.connect()``` in our Express sever
- Connect accepts a url (from our mongoDB account) as a parameter
- Connect is a async function
```javascript
cost url = <your url>;
mongoose.connect(url),then(() => "Connected to MongoDB!");
```
### Schemas and Models
- Collections are defined in Mongoose using schemas and models
- **Schemas**: defines data fields and types (what our documents will look like)
- **Model**: Connects schema to Mongoose collection
- Each schema and model group should typically get its own js file
```javascript
const mongoose = require("mongoose")
const eventSchema = new mongoose.Schema({
    name: Stirng,
    topic: Sting,
    date: Date,
)};
const Event = mongoose.model("Event", event Schema)
```
### CRUD in Mongoose - CREATE
- Option 1: ```create()```
    - Create and save in the same step
### CRUD in Mongoose - READ
- Zero or More: find()
    - Query a collection for documents
    - If query is empty, all documents in collection are returned 
- Zero or One: ```findOne()``` or ```findByID()```
    - ```findOne()``` uses same sytax as ```find()```, just only returns one
    - ```findByID()``` only accepts ID as input
### CRUD in Mongoose - UPDATE and DELETE
- Update
    - ```findByIdAndUpdate())```
    - ```findOneAndUpdate()```
- Delete
    - ```findByIDAndDelete()```
    - ```findOneAndDelete()```