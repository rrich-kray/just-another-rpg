# Test-Driven Development (TDD)

TDD is a software development practice in which a developer creates failing test cases, and then writes code so that the tests pass. Once the tests pass, the developer refactors the code to keep it DRY. These three steps are commonly referred to as Red, Green, Refactor.

Writing tests ensures you don't write any more code than you need

You write the test, which will fail, then write just enough code to pass the test, then refactor the code to improve it

Helps write maintainable code, gives you peace of mind

npm scripts allow us to add short snippets that we want our project to run at different stages during the build that we would otherwise run from the command line.

use the *.test.js naming convention because this is what Jest expects.

As we move forward, any time you write a test, make sure that it fails before you start writing the corresponding method, even if you're not explicitly directed to do so. A test that passes before you've written the corresponding code means the test wasn't written properly!