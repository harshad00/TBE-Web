# 15: Error Handling

[https://www.youtube.com/embed/EXATEA5VHeo?si=4Jo1CtXKeRR46Ah1](https://www.youtube.com/embed/EXATEA5VHeo?si=4Jo1CtXKeRR46Ah1)

### 1. What is Error Handling?

Error handling is the process of anticipating, detecting, and resolving errors in code. It helps maintain control of a program’s flow even when something goes wrong, ensuring a smooth user experience.

### 2. Types of Errors in JavaScript

- **Syntax Errors**: Mistakes in the code's structure.
- **Runtime Errors**: Errors that occur during execution, like trying to access a property of `undefined`.
- **Logical Errors**: Code runs but produces incorrect results.

### 3. `try...catch` Statement

- Used to handle runtime errors in JavaScript.
- **`try` block**: Contains the code that might throw an error.
- **`catch` block**: Executes if an error occurs.

**Example:**

```jsx
try {
  let result = someFunction(); // If this function doesn't exist, an error will be thrown.
} catch (error) {
  console.log('An error occurred: ' + error.message);
}
```

### 4. `finally` Block

- The `finally` block executes whether or not an error was thrown in the `try` block.
- It's useful for cleanup tasks, like closing resources.

**Example:**

```jsx
try {
  let data = fetchData();
} catch (error) {
  console.log('An error occurred: ' + error.message);
} finally {
  console.log('This will always run.');
}
```

### 5. Throwing Errors Manually

You can manually throw errors when certain conditions aren’t met.

**Example:**

```jsx
function validateAge(age) {
  if (age < 18) {
    throw new Error('User must be 18 or older.');
  }
  return true;
}

try {
  validateAge(16);
} catch (error) {
  console.log(error.message); // "User must be 18 or older."
}
```

### 6. Custom Error Classes

JavaScript allows you to create custom error classes to provide more context to errors.

**Example:**

```jsx
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

try {
  throw new ValidationError('This is a validation error.');
} catch (error) {
  console.log(error.name); // "ValidationError"
  console.log(error.message); // "This is a validation error."
}
```
