You can use several different types of loops for performing iterations in your code. The three most common loop structures are `for`, `while`, and `do-while`. Additionally, you can use the `break` and `continue` statements to control the flow of your loops. Here are examples of how to use these constructs:

1. `for` Loop:
   The `for` loop is typically used when you know the number of iterations in advance.

   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i); // Prints 0, 1, 2, 3, 4
   }
   ```

2. `while` Loop:
   The `while` loop continues to iterate as long as a specified condition is `true`.

   ```javascript
   let i = 0;
   while (i < 5) {
     console.log(i); // Prints 0, 1, 2, 3, 4
     i++;
   }
   ```

3. `do-while` Loop:
   The `do-while` loop is similar to a `while` loop, but it guarantees that the loop block will be executed at least once before checking the loop condition.

   ```javascript
   let i = 0;
   do {
     console.log(i); // Prints 0
     i++;
   } while (i < 0);
   ```

4. `break` Statement:
   The `break` statement is used to exit a loop prematurely. It can be used in `for`, `while`, and `do-while` loops.

   ```javascript
   for (let i = 0; i < 10; i++) {
     if (i === 5) {
       break; // Exit the loop when i equals 5
     }
     console.log(i); // Prints 0, 1, 2, 3, 4
   }
   ```

5. `continue` Statement:
   The `continue` statement is used to skip the current iteration of a loop and proceed to the next one.

   ```javascript
   for (let i = 0; i < 5; i++) {
     if (i === 2) {
       continue; // Skip iteration when i equals 2
     }
     console.log(i); // Prints 0, 1, 3, 4
   }
   ```

These are the basic building blocks for creating loops and controlling the flow of iterations in JavaScript. You can use these loop constructs and control statements to perform a wide range of tasks, including iterating over arrays, executing code based on conditions, and breaking out of loops when certain conditions are met.