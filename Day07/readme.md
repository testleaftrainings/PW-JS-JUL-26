# 🚀 Day 07 – TypeScript Fundamentals, Alerts & Data Structures

Welcome to **Day 07** of the Playwright learning series.

This repository introduces **TypeScript fundamentals in the context of Playwright automation**, along with advanced handling of **JavaScript browser dialogs**, TypeScript's type system, and commonly used data structures for automation frameworks.

---

# 📖 Overview

TypeScript provides static typing, improved IntelliSense, and compile-time validation, making it well suited for building scalable Playwright automation frameworks.

This session combines TypeScript fundamentals with practical Playwright concepts, including:

* JavaScript Alert and Dialog Handling
* TypeScript Installation and Configuration
* Type Annotations and Type Inference
* TypeScript Data Types
* `any` vs `unknown`
* `never` and `tuple`
* Arrays and Objects
* Nested Objects
* Type Aliases

---

# 📚 Topics Covered

## 🚨 Playwright Alert & Dialog Handling

Learn how Playwright interacts with **browser-native dialogs** that are not part of the DOM.

### Dialog Types

* `alert`
* `confirm`
* `prompt`
* `beforeunload`

### Dialog APIs

* `dialog.type()`
* `dialog.message()`
* `dialog.accept()`
* `dialog.accept("text")`
* `dialog.dismiss()`
* `dialog.defaultValue()`

### Event Handling

* `page.on("dialog")`
* `page.waitForEvent("dialog")`

### Key Concepts

* Browser-native dialogs vs DOM elements
* Why locators cannot interact with JavaScript alerts
* Dialog event handling
* Listener registration before triggering the dialog
* Prompt handling

---

# 🔷 TypeScript Fundamentals

## Installation

### Global Installation

```bash
npm install typescript -g
```

Verify the installation:

```bash
tsc --version
```

### Project-Level Installation

```bash
npm install --save-dev typescript
```

---

## ⚙️ TypeScript Configuration

Initialize a TypeScript project:

```bash
npx tsc --init
```

The generated `tsconfig.json` can be configured according to the project's requirements.

---

## ▶️ Executing TypeScript

### Traditional Compilation

```bash
tsc filename.ts
node filename.js
```

### Using ts-node

```bash
npx ts-node filename.ts
```

This allows TypeScript files to be executed without manually generating JavaScript files.

---

# 🏷️ Type System

TypeScript supports both **explicit type annotations** and **type inference**.

### Type Annotation

```typescript
let count: number = 10;
let name: string = "Bhuvanesh";
let isActive: boolean = true;
```

### Type Inference

```typescript
let count = 10;
let name = "Bhuvanesh";
let isActive = true;
```

TypeScript automatically determines the types from the assigned values.

---

# 🧩 TypeScript Data Types

The session covers:

* `number`
* `string`
* `boolean`
* `undefined`
* `null`
* `any`
* `unknown`
* `never`
* `tuple`

---

## ⚖️ `any` vs `unknown`

Understanding the difference between `any` and `unknown` is important when designing maintainable automation frameworks.

| Feature               | `any`                 | `unknown`                    |
| --------------------- | --------------------- | ---------------------------- |
| Type Safety           | ❌ Disabled            | ✅ Required                   |
| Compile-Time Checking | ❌ No                  | ✅ Yes                        |
| Direct Method Access  | ✅ Allowed             | ❌ Requires validation        |
| Recommended           | ❌ Avoid when possible | ✅ Preferred for unknown data |

### `any`

```typescript
let data: any = "Hello";

data = 100;
data = true;

data.toUpperCase();
```

`any` effectively disables TypeScript's type checking.

### `unknown`

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

`unknown` requires the type to be validated before performing type-specific operations.

---

# 🛑 `never`

The `never` type represents a function that does not successfully return.

A common example is a function that always throws an exception:

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

### Automation Use Case

`never` can be used to represent fail-fast utility functions that terminate execution by throwing an exception.

---

# 📦 Tuple

A tuple represents a fixed-size collection where each position has a defined type.

```typescript
let loginData: [string, string] = [
    "admin@testleaf.com",
    "Test@123"
];
```

Example:

```typescript
let apiResult: [number, string, boolean] = [
    200,
    "Success",
    true
];
```

Tuples are useful when the **order and data type of each value are known and fixed**.

---

# 🗂️ Data Structures

The session introduces commonly used data structures from an automation framework perspective.

## Array

Stores multiple values in a single variable.

```typescript
const browsers: string[] = [
    "chrome",
    "edge",
    "firefox"
];
```

Common automation use cases:

* Browser lists
* Test data
* Expected values
* User roles

---

## Object

Stores information as key-value pairs.

```typescript
const employee = {
    empId: 882,
    designation: "Sr.SDET"
};
```

Common automation use cases:

* Configuration
* Test data
* API payloads
* Environment settings

---

## Nested Object

Objects can contain other objects.

```typescript
const environments = {
    qa: {
        url: "https://qa-app.com"
    },
    prod: {
        url: "https://prod-app.com"
    }
};
```

Useful for managing multiple environment configurations.

---

# 🏷️ Type Alias

A type alias allows a reusable custom type to be created.

```typescript
type Employee = {
    empId: number;
    phno: number;
};
```

The same type can then be reused across the framework.

### Benefits

* Reusability
* Readability
* Maintainability
* Reduced duplication

---

# 🎯 Learning Objectives

After completing this repository, you will be able to:

* Handle JavaScript alerts and browser dialogs using Playwright.
* Understand why browser-native dialogs cannot be handled using locators.
* Use `page.on("dialog")`.
* Install and configure TypeScript.
* Understand type annotations and type inference.
* Work with common TypeScript data types.
* Differentiate `any` and `unknown`.
* Understand the purpose of `never` and tuples.
* Work with arrays, objects, and nested objects.
* Create reusable TypeScript type aliases.

---

# 🏗️ Playwright Dialog Handling Flow

```text
Test Execution
      │
      ▼
User Action
      │
      ▼
Application Triggers Dialog
      │
      ▼
Browser Native Dialog
      │
      ▼
Playwright Dialog Event
      │
      ├── dialog.type()
      ├── dialog.message()
      ├── dialog.accept()
      └── dialog.dismiss()
      │
      ▼
Test Execution Continues
```

---

# 📚 Key Concepts

| Concept                       | Purpose                                               |
| ----------------------------- | ----------------------------------------------------- |
| `page.on("dialog")`           | Registers a dialog event listener                     |
| `page.waitForEvent("dialog")` | Waits for a specific dialog event                     |
| `dialog.type()`               | Returns the dialog type                               |
| `dialog.message()`            | Returns dialog text                                   |
| `dialog.accept()`             | Accepts the dialog                                    |
| `dialog.dismiss()`            | Dismisses the dialog                                  |
| Type Annotation               | Explicitly defines a type                             |
| Type Inference                | TypeScript determines the type                        |
| `any`                         | Disables type safety                                  |
| `unknown`                     | Safe representation of unknown data                   |
| `never`                       | Represents a function that never successfully returns |
| Tuple                         | Fixed-size, fixed-order typed collection              |
| Type Alias                    | Reusable custom type                                  |

---

# 📚 Best Practices

* Register the dialog listener **before** triggering the action that opens the dialog.
* Prefer `page.waitForEvent("dialog")` for single-dialog scenarios.
* Use `page.on("dialog")` when a persistent dialog listener is required.
* Avoid `any` unless there is a specific reason to use it.
* Prefer `unknown` for external or uncertain data.
* Use explicit type annotations where they improve clarity.
* Use type aliases for reusable data structures.
* Keep test data and framework configuration strongly typed.

---

# 🧪 Classroom Assignment

The session includes a practical assignment combining **Frames and Alerts**.

### Objective

Automate a web application by:

1. Loading the application.
2. Switching to the required frame.
3. Triggering a browser dialog.
4. Accepting or dismissing the dialog.
5. Verifying the resulting text.

This exercise combines multiple Playwright concepts covered during the session.

---

# ▶️ Getting Started

Install project dependencies:

```bash
npm install
```

Check TypeScript:

```bash
tsc --version
```

Compile a TypeScript file:

```bash
tsc filename.ts
```

Execute a TypeScript file using `ts-node`:

```bash
npx ts-node filename.ts
```

Run Playwright tests:

```bash
npx playwright test
```

---

# 🎓 Interview Preparation

This repository covers commonly asked interview topics, including:

### Playwright

* What is a JavaScript alert?
* Why can't Playwright locators handle alerts?
* What is `page.on("dialog")`?
* Difference between `page.on("dialog")` and `page.waitForEvent("dialog")`.
* Difference between `dialog.accept()` and `dialog.dismiss()`.
* How do you handle a prompt in Playwright?

### TypeScript

* What is TypeScript?
* Why is TypeScript preferred for automation frameworks?
* What is type inference?
* What is type annotation?
* Difference between `any` and `unknown`.
* What is the `never` type?
* What is a tuple?
* What is a type alias?
* Array vs Object.
* What is a nested object?

---

# 🎯 Key Learning Outcome

By the end of this session, you will understand how to handle browser-native dialogs in Playwright and apply TypeScript's type system to automation development.

You will also be able to structure test data using **Arrays, Objects, Nested Objects, Tuples, and Type Aliases**, providing a strong foundation for developing type-safe and maintainable Playwright automation frameworks.

---

# 👨‍💻 Author

**Bhuvanesh**

*Playwright | TypeScript | UI Automation | API Automation | Test Automation Framework Design*

---

⭐ If you find this repository helpful, consider giving it a **Star** and continue your Playwright learning journey.
