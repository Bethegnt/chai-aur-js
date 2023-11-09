Variables are used to store and manage data. They are containers that hold values, and these values can be of various data types, such as numbers, strings, objects, and more. Here's an overview of variables in JavaScript with examples:

### Variable Declaration:

You declare a variable using the `var`, `let`, or `const` keyword.

#### 1. **var (ES5):**
   - Variables declared with `var` have function-level scope and are hoisted to the top of their scope.
   - It's considered a bit outdated, and `let` and `const` are preferred in modern JavaScript.

   ```javascript
   var age = 25;
   ```

#### 2. **let (ES6+):**
   - Variables declared with `let` have block-level scope, making them more predictable than `var`.
   - They can be reassigned.

   ```javascript
   let name = "John";
   ```

#### 3. **const (ES6+):**
   - Variables declared with `const` are block-scoped and cannot be reassigned after initialization.
   - It's commonly used for values that should not change.

   ```javascript
   const pi = 3.14;
   ```
Certainly! Here's a table summarizing the differences between `var`, `let`, and `const` in JavaScript:


| Feature                | `var`                                  | `let`                                  | `const`                                |
|------------------------|----------------------------------------|----------------------------------------|----------------------------------------|
| **Scope**              | Function scope (or global if declared outside any function) | Block scope                            | Block scope                            |
| **Hoisting**           | Hoisted to the top of its scope. Can be used before declaration. | Hoisted to the top of its block. Cannot be accessed before declaration. | Hoisted to the top of its block. Cannot be accessed before declaration. |
| **Reassignment**       | Can be reassigned                       | Can be reassigned                       | Cannot be reassigned                   |
| **Example**            | ```javascript var x = 5; if (true) { var x = 10; } console.log(x); // Outputs 10 ``` | ```javascript let x = 5; if (true) { let x = 10; } console.log(x); // Outputs 5 ``` | ```javascript const x = 5; if (true) { const x = 10; } console.log(x); // Outputs 5 ``` |
| **Temporal Dead Zone** | Not affected. Variables are hoisted to the top. | Throws an error if accessed before declaration. | Throws an error if accessed before declaration. |

These are some of the key differences between `var`, `let`, and `const` in JavaScript. It's generally recommended to use `let` and `const` over `var` for more predictable behavior and to avoid certain pitfalls associated with `var`.