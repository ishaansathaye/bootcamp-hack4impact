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
