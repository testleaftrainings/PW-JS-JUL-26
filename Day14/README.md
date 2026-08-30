# 🚀 Playwright Day 14 – OAuth Authentication, Page Object Model & Custom Fixtures

Welcome to **Day 14** of the Playwright learning series.

This repository demonstrates how to build a scalable Playwright automation framework by integrating **Salesforce OAuth Authentication**, **REST API Testing**, **Page Object Model (POM)**, **Custom Fixtures**, and **End-to-End UI Automation**.

---

## 📖 Overview

This module focuses on designing maintainable automation frameworks using Playwright.

You'll learn how to:

* Generate Salesforce OAuth Access Tokens
* Perform API Method Chaining using Playwright
* Design reusable Page Objects
* Implement Custom Fixtures
* Execute End-to-End UI automation using a scalable framework structure

---

# 📚 Topics Covered

## 🔐 Salesforce OAuth Authentication

* OAuth 2.0 Client Credentials Flow
* Access Token Generation
* Authorization Headers
* Secure API Authentication

---

## 🌐 Playwright API Testing

* APIRequestContext
* POST Request
* GET Request
* HTTP Headers
* Request Body
* Response Validation
* Method Chaining

---

## ☁️ Salesforce REST API

* Create Lead
* Retrieve Lead
* REST Endpoints
* Path Parameters
* Authorization using Bearer Token

---

## 🏗️ Page Object Model (POM)

* Page Classes
* Constructor Injection
* Reusable Page Methods
* Inheritance
* Separation of Test Logic and UI Actions

---

## 🧩 Custom Fixtures

* Extending Playwright Fixtures
* Dependency Injection
* Reusable Page Objects
* Cleaner Test Scripts

---

## 🔄 End-to-End Automation

* Login to Salesforce
* Navigate using App Launcher
* Execute Business Flow
* Framework-Based Test Execution

---

# 🎯 Learning Objectives

After completing this repository, you will be able to:

* Generate OAuth Access Tokens using Playwright
* Authenticate Salesforce REST APIs
* Perform API Method Chaining
* Design reusable Page Object Models
* Build Custom Fixtures
* Write maintainable End-to-End Playwright tests
* Follow enterprise automation framework standards

---

# 📂 Repository Structure

```text
Day14/
│
├── fixture/
│   └── salesforceFixture.ts
│
├── pages/
│   ├── login.ts
│   └── home.ts
│
├── tests/
│   ├── oauth-api.spec.ts
│   ├── pom.spec.ts
│   └── fixture.spec.ts
│
├── playwright.config.ts
└── README.md
```

---

# 💻 Technologies Used

* Playwright
* TypeScript
* Node.js
* Salesforce REST API
* OAuth 2.0

---

# 🚀 Practical Implementations

## ✅ OAuth Authentication

Generate an OAuth Access Token using Salesforce Client Credentials flow.

---

## ✅ API Method Chaining

The repository demonstrates:

* Generate Access Token
* Create Lead (POST)
* Retrieve Lead (GET)

using the Lead ID returned from the previous request.

---

## ✅ Page Object Model

Implemented reusable Page Classes including:

* Login Page
* Home Page

Each page encapsulates its own locators and business actions.

---

## ✅ Custom Fixtures

Implemented reusable Playwright fixtures by extending the default `test` object.

Benefits include:

* Shared Page Objects
* Cleaner Test Scripts
* Reduced Boilerplate
* Improved Maintainability

---

## ✅ End-to-End UI Automation

Implemented an E2E Salesforce automation flow covering:

* Login
* Application Navigation
* Sales App Selection

using reusable Page Objects and Fixtures.

---

# 🏗️ Framework Workflow

```text
OAuth Authentication
        │
        ▼
Generate Access Token
        │
        ▼
Create Salesforce Lead
        │
        ▼
Retrieve Lead Details
        │
        ▼
──────────────────────────
        │
        ▼
Launch Browser
        │
        ▼
Login Page (POM)
        │
        ▼
Home Page (POM)
        │
        ▼
Custom Fixture
        │
        ▼
End-to-End Execution
```

---

# 📚 Key Concepts

| Module                | Description                |
| --------------------- | -------------------------- |
| OAuth Authentication  | Generate Access Tokens     |
| Salesforce API        | Create & Retrieve Leads    |
| API Method Chaining   | Reuse API Responses        |
| Page Object Model     | Encapsulate UI Actions     |
| Custom Fixtures       | Dependency Injection       |
| End-to-End Automation | Complete Business Workflow |

---

# 📚 Best Practices

* Keep API credentials outside source code using environment variables.
* Separate UI actions into Page Objects.
* Reuse Page Objects through Custom Fixtures.
* Validate API responses before consuming response data.
* Keep tests independent and maintainable.
* Follow the Single Responsibility Principle (SRP) for page classes.

---

# ▶️ Getting Started

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run API tests

```bash
npx playwright test tests/oauth-api.spec.ts
```

Run UI tests

```bash
npx playwright test tests/pom.spec.ts
```

---

# 🎓 Interview Preparation

This repository covers frequently asked Playwright interview topics, including:

* OAuth Authentication
* Salesforce REST API
* API Method Chaining
* APIRequestContext
* Page Object Model (POM)
* Custom Fixtures
* Fixture Pattern
* Dependency Injection
* Playwright Framework Design
* End-to-End Automation

---

# 📖 References

* Playwright Documentation
* Salesforce REST API Documentation
* OAuth 2.0 Specification

---

# 👨‍💻 Author

**Bhuvanesh**

*Playwright | TypeScript | API Automation | UI Automation | Salesforce | Framework Design*

---

⭐ If you found this repository helpful, consider giving it a **Star**.