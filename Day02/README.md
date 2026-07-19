# 🚀 Day 02 – JavaScript Fundamentals: Operators, Conditionals, Loops & Hoisting

Welcome to **Day 02** of the JavaScript learning series.

This repository focuses on the core JavaScript programming concepts required for writing effective automation scripts with Playwright, including **Operators, Conditional Statements, Looping Statements, and Hoisting**.

---

# 📖 Overview

Understanding JavaScript fundamentals is essential before building automation scripts using Playwright.

This session focuses on how to:

* Perform operations using JavaScript operators
* Make decisions using conditional statements
* Repeat operations using loops
* Understand JavaScript's variable and function hoisting behavior

These concepts form the foundation for writing dynamic and reusable automation logic.

---

# 📚 Topics Covered

## ➕ Operators

JavaScript operators are used to perform operations on variables and values.

### Types of Operators

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Increment & Decrement Operators

### Common Operators

| Category              | Operators                                      |
| --------------------- | ---------------------------------------------- |
| Arithmetic            | `+`, `-`, `*`, `/`, `%`                        |
| Assignment            | `=`, `+=`, `-=`, `*=`, `/=`                    |
| Comparison            | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| Logical               | `&&`, `\|\|`, `!`                              |
| Increment / Decrement | `++`, `--`                                     |

---

## 🔀 Conditional Statements

Conditional statements control program execution based on specific conditions.

Topics covered:

* `if`
* `if...else`
* `else if`
* Nested Conditions
* `switch`

### Example

```javascript
let browser = "chrome";

if (browser === "chrome") {
    console.log("Launching Chrome");
} else {
    console.log("Launching another browser");
}
```

Conditional statements are commonly used in automation for:

* Browser selection
* Environment selection
* Conditional test execution
* Validation logic

---

## 🔁 Looping Statements

Loops allow a block of code to execute repeatedly based on a condition or collection.

### Loops Covered

* `for`
* `while`
* `do...while`
* `for...in`
* `for...of`

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Loop Selection

| Loop         | Common Use                                             |
| ------------ | ------------------------------------------------------ |
| `for`        | Known number of iterations                             |
| `while`      | Repeat while condition is true                         |
| `do...while` | Execute at least once                                  |
| `for...in`   | Iterate object properties                              |
| `for...of`   | Iterate values of arrays, strings, and other iterables |

---

## ⬆️ Hoisting

Hoisting describes JavaScript's behavior of processing declarations before code execution within their scope.

### `var`

A `var` declaration is hoisted and initialized with `undefined`.

```javascript
console.log(value);

var value = 10;
```

Output:

```text
undefined
```

Conceptually:

```javascript
var value;

console.log(value);

value = 10;
```

---

### `let` and `const`

`let` and `const` declarations are also hoisted, but they remain in the **Temporal Dead Zone (TDZ)** until their declaration is evaluated.

```javascript
console.log(value);

let value = 10;
```

This results in:

```text
ReferenceError
```

---

### Function Declaration Hoisting

Function declarations can generally be called before their declaration appears in the source code.

```javascript
greet();

function greet() {
    console.log("Welcome to JavaScript");
}
```

---

# 🎯 Learning Objectives

After completing this repository, you will be able to:

* Understand different JavaScript operators
* Differentiate `==` and `===`
* Use comparison and logical operators
* Understand pre-increment and post-increment
* Implement conditional logic using `if`, `else`, and `switch`
* Select appropriate looping statements
* Iterate through collections using `for...in` and `for...of`
* Understand JavaScript hoisting
* Explain the behavior of `var`, `let`, and `const`
* Understand the Temporal Dead Zone (TDZ)

---

# 📂 Repository Structure

```text
Day02/
│
├── operators/
│
├── conditional-statements/
│
├── loops/
│
├── hoisting/
│
└── README.md
```

---

# 💻 Technologies Used

* JavaScript
* Node.js
* Visual Studio Code

---

# 🔄 JavaScript Execution Concepts

```text
JavaScript Fundamentals
        │
        ├── Operators
        │       ↓
        │   Perform Operations
        │
        ├── Conditions
        │       ↓
        │   Decision Making
        │
        ├── Loops
        │       ↓
        │   Repeated Execution
        │
        └── Hoisting
                ↓
          Declaration Behavior
```

---

# 📚 Key Concepts

| Concept                | Purpose                                                  |
| ---------------------- | -------------------------------------------------------- |
| Arithmetic Operators   | Mathematical operations                                  |
| Comparison Operators   | Compare values                                           |
| Logical Operators      | Combine conditions                                       |
| Assignment Operators   | Assign or update values                                  |
| Conditional Statements | Decision making                                          |
| `switch`               | Multiple conditional branches                            |
| Loops                  | Repeated execution                                       |
| `for...in`             | Iterate object properties                                |
| `for...of`             | Iterate iterable values                                  |
| Hoisting               | Declaration processing behavior                          |
| TDZ                    | Restricts access to `let` and `const` before declaration |

---

# 📚 Best Practices

* Prefer `===` over `==` for strict comparison.
* Use meaningful variable names.
* Use `let` and `const` instead of `var` in modern JavaScript.
* Prefer `const` when reassignment is not required.
* Choose the loop that best matches the use case.
* Avoid unnecessary nested conditions.
* Always use braces `{}` for conditional and looping blocks for better readability.
* Understand hoisting rather than relying on it intentionally in application code.

---

# ▶️ Getting Started

Check the installed Node.js version:

```bash
node --version
```

Run a JavaScript file:

```bash
node filename.js
```

Example:

```bash
node operators.js
```

---

# 🎓 Interview Preparation

This repository covers commonly asked JavaScript interview topics, including:

* What are operators in JavaScript?
* Difference between `==` and `===`
* Difference between `&&` and `||`
* Pre-increment vs Post-increment
* `if...else` vs `switch`
* Different types of loops
* `for...in` vs `for...of`
* What is Hoisting?
* How does `var` behave during hoisting?
* How do `let` and `const` behave during hoisting?
* What is the Temporal Dead Zone?
* Are function declarations hoisted?

---

# 👨‍💻 Author

**Bhuvanesh**

*JavaScript | TypeScript | Playwright | Test Automation*

---

⭐ If you find this repository helpful, consider giving it a **Star** and continue with the upcoming JavaScript and Playwright learning modules.
