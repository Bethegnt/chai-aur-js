JavaScript provides various operators for performing different operations, including comparison, arithmetic, logical, assignment, and more. Let's focus on comparison operators and provide examples of other common operators:

### Comparison Operators:

Comparison operators are used to compare values and return a boolean result (`true` or `false`).

#### 1. **Equality (`==` and `===`):**

- `==`: Equality operator (loose equality). It performs type coercion if the operands are of different types.

  ```javascript
  console.log(5 == "5"); // Outputs true (coerces the string to a number)
  ```

- `===`: Strict equality operator. It checks both value and type without type coercion.

  ```javascript
  console.log(5 === "5"); // Outputs false (different types)
  ```

#### 2. **Inequality (`!=` and `!==`):**

- `!=`: Inequality operator (loose inequality).

  ```javascript
  console.log(5 != "5"); // Outputs false (coerces the string to a number)
  ```

- `!==`: Strict inequality operator.

  ```javascript
  console.log(5 !== "5"); // Outputs true (different types)
  ```

#### 3. **Other Comparison Operators (`>`, `<`, `>=`, `<=`):**

```javascript
console.log(10 > 5); // Outputs true
console.log(10 < 5); // Outputs false
console.log(10 >= 5); // Outputs true
console.log(10 <= 5); // Outputs false
```

### Other Operators:

#### 1. **Arithmetic Operators (`+`, `-`, `*`, `/`, `%`):**

```javascript
let a = 10;
let b = 3;

console.log(a + b); // Addition: Outputs 13
console.log(a - b); // Subtraction: Outputs 7
console.log(a * b); // Multiplication: Outputs 30
console.log(a / b); // Division: Outputs 3.333...
console.log(a % b); // Modulus (remainder): Outputs 1
```

#### 2. **Logical Operators (`&&`, `||`, `!`):**

```javascript
let x = true;
let y = false;

console.log(x && y); // Logical AND: Outputs false
console.log(x || y); // Logical OR: Outputs true
console.log(!x); // Logical NOT: Outputs false
```

#### 3. **Assignment Operators (`=`, `+=`, `-=`, `*=`, `/=`, `%=`):**

```javascript
let num = 5;

num += 3; // Equivalent to: num = num + 3;
console.log(num); // Outputs 8
```

#### 4. **Increment and Decrement Operators (`++`, `--`):**

```javascript
let count = 10;

count++; // Increment by 1
console.log(count); // Outputs 11

count--; // Decrement by 1
console.log(count); // Outputs 10
```

