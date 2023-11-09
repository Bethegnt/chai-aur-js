IIFE stands for Immediately Invoked Function Expression. It's a design pattern in JavaScript where a function is defined and executed immediately after being created. The primary purpose of IIFE is to create a new scope for variables, preventing them from polluting the global scope.

Here's a basic example of an IIFE:

```javascript
(function() {
  // code here is within the scope of the IIFE
  var localVar = "I'm a local variable in an IIFE";
  console.log(localVar);
})();
// localVar is not accessible here because it's local to the IIFE
// console.log(localVar); // This would result in an error
```

In this example:

- The function is defined within parentheses `()` to make it a function expression.
- The trailing `()` immediately invokes the function.

This pattern is often used to encapsulate code and create a private scope for variables. It's commonly employed in situations where you want to avoid naming conflicts, especially in the global scope.

IIFE can also take parameters:

```javascript
(function(x, y) {
  var result = x + y;
  console.log(result);
})(10, 5); // Outputs 15
```

IIFE is less common in modern JavaScript development due to the introduction of block-scoped variables with `let` and `const` in ES6.