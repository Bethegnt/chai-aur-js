1. `switch` Statement:
   The `switch` statement is used to compare a single value against multiple possible case values and execute code based on the matched case.

   ```javascript
   let day = "Monday";
   switch (day) {
     case "Monday":
       console.log("It's the start of the workweek.");
       break;
     case "Friday":
       console.log("It's the end of the workweek.");
       break;
     default:
       console.log("It's not Monday or Friday.");
   }
   ```

2. Truthy and Falsy Values:
   JavaScript has truthy and falsy values. In conditional statements, values are evaluated as either `true` or `false`. Truthy values are considered as `true`, and falsy values are considered as `false`. Examples of falsy values include `0`, `NaN`, `null`, `undefined`, `false`, and an empty string `""`. Most other values are considered truthy.

   ```javascript
   let value = "Hello";
   if (value) {
     console.log("The value is truthy.");
   } else {
     console.log("The value is falsy.");
   }
   ```

These conditional statements and the concept of truthy and falsy values allow you to make decisions and control the flow of your JavaScript code based on various conditions and values.