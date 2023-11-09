There are several data types that you can use to represent different kinds of values. Here are the primary data types in JavaScript, along with examples:

### 1. **Primitive Data Types:**

#### a. **Number:**
   - Represents numeric values.

   ```javascript
   let age = 25;
   let pi = 3.14;
   ```

#### b. **String:**
   - Represents sequences of characters.

   ```javascript
   let name = "John";
   let message = 'Hello, World!';
   ```

#### c. **Boolean:**
   - Represents a logical value - either `true` or `false`.

   ```javascript
   let isStudent = true;
   let hasJob = false;
   ```

#### d. **Undefined:**
   - Represents a variable that has been declared but not assigned a value.

   ```javascript
   let undefinedVar;
   ```

#### e. **Null:**
   - Represents the intentional absence of any object value.

   ```javascript
   let nullVar = null;
   ```

#### f. **Symbol:**
   - Introduced in ECMAScript 6 (ES6), represents a unique identifier.

   ```javascript
   let id = Symbol("unique");
   ```

### 2. **Composite Data Types:**

#### a. **Object:**
   - Represents a collection of key-value pairs.

   ```javascript
   let person = {
     name: "John",
     age: 25,
     isStudent: false
   };
   ```

#### b. **Array:**
   - Represents an ordered list of values.

   ```javascript
   let fruits = ["apple", "banana", "orange"];
   ```

### 3. **Special Data Type:**

#### a. **Function:**
   - Represents a reusable block of code.

   ```javascript
   function greet(name) {
     console.log("Hello, " + name + "!");
   }
   ```

### 4. **Non-Primitive Data Type:**

#### a. **Object:**
   - Although mentioned earlier, it's worth noting that in JavaScript, objects are non-primitive data types.

   ```javascript
   let person = {
     name: "John",
     age: 25,
     isStudent: false
   };
   ```

