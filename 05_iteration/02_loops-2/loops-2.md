In JavaScript, `forEach`, `for...in`, and `for...of` are all used for iterating over elements in an array or properties of an object, but they differ in their behavior and use cases.

1. **`forEach`**:
   - The `forEach` method is a built-in array method that iterates over the elements of an array. It takes a callback function as an argument and applies that function to each element in the array.
   - It is typically used for iterating over arrays and is especially useful when you want to perform an action for each element but don't need to return a new array or modify the existing one.

   Example:

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   numbers.forEach((number) => {
     console.log(number);
   });
   ```

2. **`for...in`**:
   - The `for...in` loop is used to iterate over the enumerable properties of an object. It is not intended for iterating over arrays, but rather for objects, where you want to access the keys or property names.
   - It's important to note that `for...in` may not guarantee a specific order when iterating over object properties.

   Example:

   ```javascript
   const person = { name: 'John', age: 30 };
   for (const key in person) {
     console.log(key, person[key]);
   }
   ```

3. **`for...of`**:
   - The `for...of` loop is used for iterating over the values of iterable objects, such as arrays, strings, maps, sets, etc. It provides a concise and easy-to-read way to iterate over elements in a collection.
   - It is not suitable for iterating over object properties, as it focuses on values rather than keys.

   Example:

   ```javascript
   const fruits = ['apple', 'banana', 'cherry'];
   for (const fruit of fruits) {
     console.log(fruit);
   }
   ```

Differences between them:

- **Purpose**:
  - `forEach` is used specifically for iterating over the elements of an array.
  - `for...in` is used for iterating over the properties of an object.
  - `for...of` is used for iterating over the values of iterable objects.

- **Array vs. Object**:
  - `forEach` is designed for arrays.
  - `for...in` is typically used for objects but can be used with arrays (although it's not recommended).
  - `for...of` is designed for iterable objects, primarily arrays and other iterable data structures.

- **Order**:
  - `forEach` and `for...of` iterate over elements in a predictable order.
  - `for...in` does not guarantee a specific order when iterating over object properties.

