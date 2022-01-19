# Test-Driven Development (TDD)

TDD is a software development practice in which a developer creates failing test cases, and then writes code so that the tests pass. Once the tests pass, the developer refactors the code to keep it DRY. These three steps are commonly referred to as Red, Green, Refactor.

Writing tests ensures you don't write any more code than you need

You write the test, which will fail, then write just enough code to pass the test, then refactor the code to improve it

Helps write maintainable code, gives you peace of mind

npm scripts allow us to add short snippets that we want our project to run at different stages during the build that we would otherwise run from the command line.

use the *.test.js naming convention because this is what Jest expects.

As we move forward, any time you write a test, make sure that it fails before you start writing the corresponding method, even if you're not explicitly directed to do so. A test that passes before you've written the corresponding code means the test wasn't written properly!

# The four main principles of OOP

1. Encapsulation - The idea that the state and data of an object are privately held inside of a class. Other objects will not have access to data inside of that class, but rather will have to call a public method to return that data
2. Abstraction - User can use a method without understanding its inner workings. For example, the .getSalary() method in an employee object should do what is syas it is 
3. Polymorphism - Idea that a class's functionality is dependent upon on the number and type of parameters given to it
4. Inheritance - Child classes can inherit the methods of their parent classes

ES5 vs. ES6:

1. ES6 classes are not hoisted, meaning function declarations are not loaded into memory before the code executes 