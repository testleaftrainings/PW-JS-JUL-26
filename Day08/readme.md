# 🚀 Day 08 – TypeScript OOP & Advanced Type System

Welcome to **Day 08** of the TypeScript and Playwright learning series.

This repository focuses on **TypeScript Data Structures, Advanced Types, Enums, and Object-Oriented Programming (OOP)** with a real-time automation framework perspective.

---

## 📚 Topics Covered

### 📦 Data Structures

* Arrays
* Objects
* Nested Objects
* Type Aliases
* Automation Framework Data Structures

### 🔷 Advanced TypeScript

* Union Types (`|`)
* Intersection Types (`&`)
* Type Narrowing
* Type Assertions
* `any` vs `unknown`
* Tuples
* `never`

### 🔢 Enums

* Enum Fundamentals
* Numeric Enums
* String Enums
* Enum vs Type Alias
* Enum vs Type Assertion
* Automation Use Cases
* Browser, Environment & Execution Status Enums

### 🏗️ Object-Oriented Programming

* Classes
* Objects
* Constructors
* Access Modifiers

  * `public`
  * `private`
  * `protected`
* Functions vs Methods
* Inheritance Fundamentals
* OOP in Page Object Model (POM)

---

## 🎯 Learning Objectives

After completing this session, you will be able to:

* Structure automation data using TypeScript data structures.
* Create reusable types using Type Aliases.
* Apply Union and Intersection Types.
* Understand Type Narrowing and Type Assertions.
* Use Enums for fixed framework values.
* Understand Classes, Objects, and Constructors.
* Apply Access Modifiers effectively.
* Understand how OOP concepts support Page Object Model design.

---

## 🏗️ Automation Framework Perspective

```text
TypeScript
    │
    ├── Data Structures
    │      ├── Array
    │      ├── Object
    │      └── Nested Object
    │
    ├── Advanced Types
    │      ├── Union
    │      ├── Intersection
    │      ├── Type Narrowing
    │      └── Type Assertion
    │
    ├── Enums
    │      ├── Browser
    │      ├── Environment
    │      └── Execution Status
    │
    └── OOP
           ├── Class
           ├── Object
           ├── Constructor
           └── Access Modifiers
```

---

## 📚 Key Concepts

| Concept           | Purpose                               |
| ----------------- | ------------------------------------- |
| Array             | Store collections of test data        |
| Object            | Store configuration and payload data  |
| Type Alias        | Create reusable custom types          |
| Union Type        | Restrict values to predefined options |
| Intersection Type | Combine multiple object types         |
| Type Narrowing    | Reduce possible types safely          |
| Type Assertion    | Tell TypeScript the expected type     |
| Enum              | Define fixed named constants          |
| Class             | Blueprint for objects                 |
| Object            | Instance of a class                   |
| Constructor       | Initialize object data                |
| Access Modifier   | Control member visibility             |

---

## 💡 Real-Time Automation Examples

Common framework applications include:

* **Array** → Browser lists and test data
* **Object** → Configuration and API payloads
* **Nested Object** → Multi-environment configuration
* **Union Type** → Browser or environment selection
* **Intersection Type** → Combined framework configuration
* **Enum** → Browser, environment, execution status
* **Class** → Page Objects
* **Constructor** → Inject Playwright `Page`
* **Private Members** → Encapsulate sensitive data
* **Protected Members** → Share functionality with child classes

---

## 📚 Best Practices

* Prefer Type Narrowing over unnecessary Type Assertions.
* Use String Enums when readable runtime values are required.
* Use Type Aliases for simple compile-time value restrictions.
* Use `private` for implementation details that should not be exposed.
* Use `protected` when members need to be accessed by child classes.
* Keep classes focused and reusable.
* Apply OOP principles when designing Page Object Models.

---

## 🎓 Interview Preparation

Key interview topics include:

* Type Alias vs Enum
* Union vs Intersection Types
* Type Assertion vs Type Narrowing
* `any` vs `unknown`
* Numeric vs String Enum
* Class vs Object
* Constructor
* `public` vs `private` vs `protected`
* Function vs Method
* Why OOP is used in Page Object Model

---

## 🎯 Key Learning Outcome

By the end of this session, you will understand how TypeScript's **advanced type system and OOP concepts** can be applied to create structured, type-safe, reusable, and maintainable Playwright automation frameworks.

---

## 👨‍💻 Author

**Bhuvanesh**

*TypeScript | Playwright | Test Automation | Framework Design*

---

⭐ If you find this repository helpful, consider giving it a **Star**.