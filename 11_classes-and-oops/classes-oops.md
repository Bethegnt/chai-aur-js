In Object-Oriented Programming (OOP), there are four fundamental principles often referred to as the "pillars" of OOP: **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**. These principles help in designing and structuring code in a more organized, reusable, and manageable way. Here's an explanation of each pillar in the context of JavaScript:

### 1. Encapsulation:

- **Definition**: Encapsulation refers to bundling the data (attributes or properties) and methods (functions) that manipulate the data into a single unit or class.
- **In JavaScript**: Encapsulation can be achieved through the use of classes, closures, and scope management.
- **Example**:

  ```javascript
  class Car {
    constructor(make, model) {
      this._make = make; // Encapsulated property
      this._model = model; // Encapsulated property
    }

    // Encapsulated method
    getDetails() {
      return `${this._make} ${this._model}`;
    }
  }

  const myCar = new Car("Toyota", "Corolla");
  console.log(myCar.getDetails()); // Output: "Toyota Corolla"
  ```

### 2. Abstraction:

- **Definition**: Abstraction involves hiding the complex implementation details and displaying only essential features of an object.
- **In JavaScript**: Abstraction can be achieved by defining interfaces or using abstract classes to define methods that must be implemented by subclasses.
- **Example**:

  ```javascript
  // Abstract class or interface
  class Shape {
    calculateArea() {
      throw new Error("Method 'calculateArea' must be implemented.");
    }
  }

  // Subclass implementing the abstract method
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }

    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }

  const circle = new Circle(5);
  console.log(circle.calculateArea()); // Output: 78.54
  ```

### 3. Inheritance:

- **Definition**: Inheritance enables a new class (subclass or child class) to inherit properties and methods from an existing class (superclass or parent class).
- **In JavaScript**: Inheritance is implemented using prototype chaining or by extending classes.
- **Example**:

  ```javascript
  class Animal {
    constructor(name) {
      this.name = name;
    }

    makeSound() {
      return "Some generic sound";
    }
  }

  class Dog extends Animal {
    makeSound() {
      return "Woof!";
    }
  }

  const dog = new Dog("Buddy");
  console.log(dog.makeSound()); // Output: "Woof!"
  ```

### 4. Polymorphism:

- **Definition**: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It allows for the same interface to be used for objects of different types.
- **In JavaScript**: JavaScript supports polymorphism through method overriding and method overloading.
- **Example**:

  ```javascript
  class Animal {
    makeSound() {
      return "Some generic sound";
    }
  }

  class Dog extends Animal {
    makeSound() {
      return "Woof!";
    }
  }

  class Cat extends Animal {
    makeSound() {
      return "Meow!";
    }
  }

  const dog = new Dog();
  const cat = new Cat();

  console.log(dog.makeSound()); // Output: "Woof!"
  console.log(cat.makeSound()); // Output: "Meow!"
  ```

Understanding and applying these pillars of OOP in JavaScript can lead to more robust, maintainable, and flexible code structures.


### Getter and Setter Properties:

- **Getter**: A getter method is used to retrieve the value of a property. It's declared using the `get` keyword and accessed like a property, without parentheses.
  
  ```javascript
  class Circle {
    constructor(radius) {
      this._radius = radius;
    }

    get diameter() {
      return this._radius * 2;
    }
  }

  const circle = new Circle(5);
  console.log(circle.diameter); // Output: 10
  ```

- **Setter**: A setter method is used to update the value of a property. It's declared using the `set` keyword and accessed like an assignment to a property.
  
  ```javascript
  class Circle {
    constructor(radius) {
      this._radius = radius;
    }

    set diameter(diameter) {
      this._radius = diameter / 2;
    }
  }

  const circle = new Circle(5);
  circle.diameter = 14;
  console.log(circle._radius); // Output: 7
  ```

Getter and setter methods provide control over how properties are accessed and modified, allowing validation, computation, or encapsulation of property logic.

### Prototype:

- **Prototype**: In JavaScript, every object has a prototype, which is another object that the current object inherits properties and methods from.
  
  ```javascript
  function Person(name) {
    this.name = name;
  }

  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}.`;
  };

  const person = new Person("Alice");
  console.log(person.greet()); // Output: "Hello, my name is Alice."
  ```





