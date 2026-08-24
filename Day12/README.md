# 🚀 Playwright Day 12 – Parameterization & API Fundamentals

Welcome to **Day 12** of the Playwright learning series.

This repository focuses on **Data Parameterization** and **Web Service Fundamentals**, covering how to build reusable, data-driven Playwright tests and understand the core concepts of APIs used in modern automation testing.

---

## 📖 Overview

This session introduces different parameterization techniques in Playwright along with the fundamentals of Web Services and APIs.

By the end of this module, you will understand how to separate test data from test logic, execute the same test across multiple datasets, configure multiple environments, and gain a solid foundation in REST APIs and HTTP communication.

---

## 📚 Topics Covered

### 🗂️ Data Parameterization

- Introduction to Parameterization
- JSON Fundamentals
- JSON Parameterization
- Environment Parameterization
- CSV Parameterization
- Comparison of Parameterization Techniques
- Industry Best Practices

### 🌐 API & Web Services Fundamentals

- What is a Web Service?
- Why Web Services are Required
- Monolithic vs Microservices Architecture
- HTTP Request & Response
- HTTP Headers
- HTTP Methods
- CRUD Operations
- HTTP Status Codes
- URL vs URI
- Base URL & Endpoint
- API Parameterization

### ⚙️ API Architectures

- SOAP
- REST
- GraphQL
- gRPC

Including:

- Architecture Comparison
- Performance
- Security
- Streaming
- Browser Support
- Real-world Use Cases

---

## 🎯 Learning Objectives

After completing this repository, you will be able to:

- Build data-driven Playwright tests
- Read test data from JSON files
- Execute tests across multiple environments
- Work with CSV test data
- Understand Web Services and REST APIs
- Explain HTTP methods and status codes
- Differentiate REST, SOAP, GraphQL, and gRPC
- Apply industry best practices for API testing

---

## 📂 Repository Structure

```text
Day12/
│
├── data/
│   ├── *.json
│   ├── *.csv
│   └── *.env
│
├── tests/
│
├── utils/
│
├── playwright.config.ts
│
└── README.md
```

---

## 💻 Technologies Used

- Playwright
- TypeScript
- Node.js
- JSON
- CSV
- dotenv

---

## 🚀 Parameterization Methods

| Method | Use Case |
|----------|----------|
| JSON | Structured test data |
| CSV | Excel or business data |
| Environment Variables | Multi-environment execution |
| Arrays | Simple data-driven testing |
| API Data | Dynamic test data |

---

## 🌍 API Concepts Covered

- Web Services
- REST APIs
- HTTP Protocol
- CRUD Operations
- HTTP Methods
- Headers
- Status Codes
- URL Anatomy
- URI vs URL

---

## ⚖️ API Architecture Comparison

| Technology | Best Used For |
|------------|---------------|
| REST | Public APIs |
| SOAP | Enterprise & Banking Applications |
| GraphQL | Complex Frontend Applications |
| gRPC | High-Performance Microservices |

---

## ▶️ Getting Started

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run tests with a specific environment

### Windows PowerShell

```powershell
$env:envFileName="qa"
npx playwright test
```

### Windows Command Prompt

```cmd
set envFileName=qa
npx playwright test
```

### Linux / macOS

```bash
export envFileName=qa
npx playwright test
```

---

## 📚 Best Practices

- Keep test data separate from test logic.
- Store sensitive information in `.env` files.
- Never hardcode URLs or credentials.
- Use JSON for structured test data.
- Use CSV for business-maintained datasets.
- Organize tests for maintainability and scalability.

---

## 🎓 Interview Preparation

This repository covers commonly asked interview topics such as:

- JSON Parameterization
- Environment Variables
- CSV Parameterization
- HTTP Methods
- CRUD Operations
- REST vs SOAP
- GraphQL vs gRPC
- Monolithic vs Microservices
- HTTP Headers
- Status Codes

---

## 📖 References

- Playwright Documentation
- MDN Web Docs
- REST API Best Practices

---

## 👨‍💻 Author

**Bhuvanesh**

*Playwright | TypeScript | API Testing | Test Automation*

---

⭐ If you find this repository helpful, don't forget to **Star** the repository!