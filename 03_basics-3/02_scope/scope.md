A scope is a region of your code where a particular variable is defined and can be accessed. Scopes can be nested, meaning you can have one scope inside another.

There are two main types of scopes in JavaScript: global scope and local scope.

1. **Global Scope:**
   - Variables declared outside of any function or block have global scope.
   - They can be accessed from any part of your code, both inside and outside of functions.

   ```javascript
   var globalVar = "I'm a global variable";

   function exampleFunction() {
     console.log(globalVar); // Accessing global variable inside a function
   }

   exampleFunction();
   console.log(globalVar); // Accessing global variable outside the function
   ```

2. **Local Scope:**
   - Variables declared inside a function have local scope. They can only be accessed within that function.

   ```javascript
   function exampleFunction() {
     var localVar = "I'm a local variable";
     console.log(localVar);
   }

   exampleFunction();
   // console.log(localVar); // This would result in an error because localVar is not defined here.
   ```

   - It's important to note that variables declared with `var` keyword are function-scoped, while those declared with `let` and `const` are block-scoped.

   ```javascript
   function exampleFunction() {
     if (true) {
       var functionScopedVar = "I'm function-scoped";
       let blockScopedVar = "I'm block-scoped";
     }

     console.log(functionScopedVar); // This will work
     // console.log(blockScopedVar); // This would result in an error because blockScopedVar is not defined here.
   }
   ```