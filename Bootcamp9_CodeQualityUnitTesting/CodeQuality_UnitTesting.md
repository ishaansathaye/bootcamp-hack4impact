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
- Jest: ```npm package``` - great for testing JS and React
- Write unit tests before you write the function, but writing a test is still beneficial
- Want to test:
    - Valid inputs return expected outputs
    - Invalid inputs return expected errors
### Arrange, Act, Assert
- Divide unit tests into 3 parts
- **Arrange**: create our test data and expected results
- **Act**: calling a function/method
- **Assert**: value returned from Act should be matched with expected results

### Code Etiquette