In JavaScript, the `number` data type is used to represent numeric values, and there are various mathematical operations that can be performed using built-in functions and operators. Let's explore numbers and mathematical operations in JavaScript with examples:

### Numbers:

You can assign numeric values to variables or directly use them in expressions.

```javascript
let age = 25;
let pi = 3.14;
```

### Mathematical Operators:

#### 1. **Basic Arithmetic Operators (`+`, `-`, `*`, `/`, `%`):**

```javascript
let num1 = 10;
let num2 = 3;

console.log(num1 + num2); // Addition: Outputs 13
console.log(num1 - num2); // Subtraction: Outputs 7
console.log(num1 * num2); // Multiplication: Outputs 30
console.log(num1 / num2); // Division: Outputs 3.333...
console.log(num1 % num2); // Modulus (remainder): Outputs 1
```

#### 2. **Math Object:**

JavaScript provides a `Math` object with various mathematical methods.

- **`Math.round()`**: Rounds to the nearest integer.

  ```javascript
  let roundedNumber = Math.round(4.7);
  console.log(roundedNumber); // Outputs 5
  ```

- **`Math.floor()`**: Rounds down to the nearest integer.

  ```javascript
  let floorNumber = Math.floor(4.7);
  console.log(floorNumber); // Outputs 4
  ```

- **`Math.ceil()`**: Rounds up to the nearest integer.

  ```javascript
  let ceilNumber = Math.ceil(4.3);
  console.log(ceilNumber); // Outputs 5
  ```

- **`Math.sqrt()`**: Returns the square root.

  ```javascript
  let squareRoot = Math.sqrt(25);
  console.log(squareRoot); // Outputs 5
  ```

- **`Math.random()`**: Returns a random number between 0 (inclusive) and 1 (exclusive).

  ```javascript
  let randomNum = Math.random();
  console.log(randomNum);
  ```

- **`Math.pow()`**: Raises a number to the power of another.

  ```javascript
  let powerResult = Math.pow(2, 3);
  console.log(powerResult); // Outputs 8 (2^3)
  ```

### Examples:

```javascript
// Calculating the area of a circle
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log(area); // Outputs approximately 78.54

// Generating a random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
```
