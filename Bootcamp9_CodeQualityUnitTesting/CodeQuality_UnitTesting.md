## Bootcamp #9: Code Quality
---
### Types of tests
- Integration Testing
- Acceptance Testing
- Accessibility Testing
- User Testing
- End to End Testing
- Unit Testing
### Why Unit Test?
- Ensures code quality, code consistency
- Less technical debt
- Future-proofs our code
- Provides documentation
### When to Unit Test?
- Best to write tests:
    - Functions that take data in 
    - Code that is deterministic
        - Functions that have inputs and have the same output
    - Mission Critical Code
        - Code that is very important to the application
### How to Unit Test
- **Jest**: ```npm package``` - great for testing JS and React
    - install using: ```npm install jest```
- Write unit tests before you write the function, but writing a test is still beneficial
- Want to test:
    - Valid inputs return expected outputs
    - Invalid inputs return expected errors
### Arrange, Act, Assert
- Divide unit tests into 3 parts
- **Arrange**: create our test data and expected results
- **Act**: calling a function/method
- **Assert**: value returned from Act should be matched with expected results
---
### Code Formatting
- Code formatters automatically style your code
- **Prettier** is the most popular code formatter
    - To install Prettier:
        - ```npm install --save-dev --save-exact prettier```
    - To format your code, run:
        - ```npx prettier --write```
- Install the Prettier extension in the IDE
### Linters
- Development tools that enforce standard formatting and detect code smells (code that works but could lead to bugs later on)
- Use linters on project teams to ensure all code follows the same format
    - Readability
    - Easier bug-catching
- **ESLint** is a common linter
### When to use Node Packages
- When you need a node package, pay attention to:
    - Repetitive code 
    - Implementing a general feature (ex. calendar, clock)
    - Want to extend to more advanced functionality
### Using ```.gitignore```
- Be careful about things we do and do not want to push to github
- File that tells git which files to omit when committing and pushing
- Should be automatically created with react-create-app
- **Do not upload anything in your NODE_MODULES directory**
### Other Git Etiquette
- Commits
    - Only group similar files/changes into commits
    - Use succinct, informative commit messages
- Branches
    - Create a different branch for each feature or fix
    - Use short, meaningful branch names
- Pull Requests:
    - Write a short description of your changes in the PR message 
    - Make sure to note any issues or questions
### Commenting Code
- General formatting
    - Short comment at the top of a file to explain function
    - Comment each function's purpose
    - Comment any overly complex lines
    - Remove old code you commented out