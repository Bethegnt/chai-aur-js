### Lexical Environment:

A lexical environment in JavaScript is the association between variable names and their values within the context of the code's physical structure (lexicon or written form). It consists of two components:

1. **Environment Record:** This is where the variables and their values are stored. It can be thought of as a table or mapping of variable names to their values.

2. **Reference to Outer Environment:** This is a reference to the lexical environment in which the current environment is nested. This is what allows for the concept of scope in JavaScript.

When you declare a variable or a function inside a block of code (e.g., within a function or a loop), a new lexical environment is created.

### Closure:

A closure allows a function to access variables from its outer (enclosing) scope even after that outer function has finished executing.

Here's a simple example to illustrate closure:

```javascript
function outerFunction() {
  let outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs: I'm from the outer function
```

In this example, `innerFunction` is a closure because it's defined inside `outerFunction` and still has access to `outerVariable` even after `outerFunction` has completed. When `closureExample` is invoked, it logs the value of `outerVariable` from its enclosing scope.

Closures are powerful because they allow for the creation of private variables, encapsulation, and maintaining state across multiple function calls. They are commonly used in scenarios like event handlers, callbacks, and when dealing with asynchronous code.

Understanding lexical environments and closures is fundamental to writing more advanced JavaScript code, especially when it comes to managing scope and data privacy.