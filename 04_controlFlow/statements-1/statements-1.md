JavaScript provides several control statements for conditional execution and decision-making in your code. Here's an explanation of some of these statements along with examples:

1. `if` Statement:
   The `if` statement is used to execute a block of code if a specified condition is `true`.

   ```javascript
   let num = 10;
   if (num > 5) {
     console.log("num is greater than 5");
   }
   ```

2. `if-else` Statement:
   The `if-else` statement is used to execute one block of code if a condition is `true` and another block of code if the condition is `false`.

   ```javascript
   let num = 3;
   if (num > 5) {
     console.log("num is greater than 5");
   } else {
     console.log("num is not greater than 5");
   }
   ```

3. `if-else if` Statement:
   The `if-else if` statement is used to check multiple conditions in sequence and execute different code blocks based on the first condition that is `true`.

   ```javascript
   let num = 7;
   if (num < 5) {
     console.log("num is less than 5");
   } else if (num < 10) {
     console.log("num is less than 10");
   } else {
     console.log("num is 10 or greater");
   }
   ```

