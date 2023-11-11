In JavaScript, `map`, `reduce`, and `filter` are powerful array methods that allow you to perform various operations on arrays. You can also chain these methods together to create more complex transformations. Here are examples of each method, followed by an example of method chaining:

1. **`map`**:
   - The `map` method creates a new array by applying a function to each element in an existing array. It does not modify the original array.

   Example:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const doubledNumbers = numbers.map((number) => number * 2);
   console.log(doubledNumbers); // [2, 4, 6, 8, 10]
   ```

2. **`reduce`**:
   - The `reduce` method reduces an array to a single value by applying a function that accumulates the result iteratively.

   Example:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   console.log(sum); // 15
   ```

3. **`filter`**:
   - The `filter` method creates a new array with all elements that pass a test implemented by a provided function.

   Example:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const evenNumbers = numbers.filter((number) => number % 2 === 0);
   console.log(evenNumbers); // [2, 4]
   ```

Now, let's demonstrate chaining these methods:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .map((number) => number * 2) // Double each number
  .filter((number) => number % 4 === 0) // Filter for numbers divisible by 4
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sum the filtered numbers

console.log(result); // 12
```

In this example, we first use `map` to double each number in the array. Then, we use `filter` to keep only the numbers that are divisible by 4. Finally, we use `reduce` to sum those filtered numbers.