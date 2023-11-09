### Type Conversion in JavaScript:

Type conversion refers to the process of converting a value from one data type to another. This can happen implicitly or explicitly.

#### 1. **Implicit Type Conversion (Type Coercion):**

JavaScript performs implicit type conversion when you perform operations between values of different types. For example:

```javascript
let num = 5;
let str = "10";

let result = num + str;

console.log(result); // Outputs "510" (string concatenation)
```

In this example, the addition operation between a number (`num`) and a string (`str`) results in the implicit conversion of the number to a string, and the two values are concatenated.

#### 2. **Explicit Type Conversion:**

You can also perform explicit type conversion using functions like `parseInt`, `parseFloat`, `String`, etc.

```javascript
let numString = "10";
let num = parseInt(numString);

console.log(num); // Outputs 10 (number)
```

In this example, `parseInt` is used to explicitly convert the string "10" to a number.

### Common Type Conversion Functions:

- **`String()`**: Converts a value to a string.

  ```javascript
  let num = 42;
  let str = String(num);
  ```

- **`Number()`**: Converts a value to a number.

  ```javascript
  let str = "42";
  let num = Number(str);
  ```

- **`parseInt()`** and **`parseFloat()`**: Parse a string and return an integer or floating-point number.

  ```javascript
  let numString = "42.5";
  let num = parseFloat(numString);
  ```

- **`Boolean()`**: Converts a value to a boolean.

  ```javascript
  let truthyValue = "Hello";
  let booleanValue = Boolean(truthyValue);
  ```
