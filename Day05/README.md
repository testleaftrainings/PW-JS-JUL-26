# 🚀 Day 05 – Playwright Configuration, XPath & Advanced Locator Strategies

Welcome to **Day 05** of the Playwright learning series.

This repository focuses on understanding **Playwright Configuration (`defineConfig`)**, **XPath**, and **Advanced Locator Strategies**. You'll learn how to configure Playwright for enterprise automation projects, build reliable XPath expressions, and choose the most appropriate locator strategy for stable and maintainable test automation. The content in this README is based on the Day 05 session notes.

---

# 📖 Overview

A well-designed automation framework depends on two key factors:

* Proper Playwright project configuration.
* Reliable element locator strategies.

This session introduces the most commonly used `defineConfig()` options, XPath fundamentals, XPath axes, and locator best practices used in enterprise automation frameworks.

---

# 📚 Topics Covered

## ⚙️ Playwright Configuration (`defineConfig()`)

Learn how to configure Playwright projects for local development and CI/CD environments.

### Execution Configuration

* Test Directory
* Test Discovery
* Test Timeout
* Workers
* Retries
* Parallel Execution
* Test Filtering
* Failure Handling

---

## 🌐 Browser Configuration

* Browser Selection
* Browser Channels
* Headless / Headed Mode
* Viewport
* Screen Resolution
* Mobile Emulation
* Locale
* Timezone
* User Agent
* Color Scheme
* Accessibility Settings

---

## 🌍 Network Configuration

* Base URL
* Proxy Configuration
* Offline Mode
* HTTP Headers
* HTTP Credentials
* HTTPS Handling

---

## 🔐 Authentication & Storage

* Storage State
* Browser Permissions
* Geolocation

---

## 🎥 Debugging & Test Artifacts

* Trace Viewer
* Screenshots
* Video Recording
* Downloads
* Action Timeout
* Navigation Timeout

---

## 📦 Projects Configuration

* Multi-Browser Testing
* Browser-Specific Configuration
* Project Dependencies
* Project Metadata

---

## 📊 Reporting

* HTML Reporter
* JSON Reporter
* JUnit Reporter
* GitHub Reporter
* Blob Reporter
* Multiple Reporters

---

## 🚀 CI/CD Best Practices

* Enterprise Configuration
* GitHub Actions
* Jenkins Recommendations
* Retry Strategy
* Worker Configuration
* HTML Reports
* JUnit Integration

---

## 🎯 XPath

* Absolute XPath
* Relative XPath
* Attribute-Based XPath
* Text-Based XPath
* Partial Attribute Matching
* Partial Text Matching
* Collection XPath (Index)

---

## 🔄 XPath Axes

* Parent → Child
* Child → Parent
* Grand Parent → Grand Child
* Grand Child → Grand Parent
* Following Sibling
* Preceding Sibling
* Following
* Preceding

---

## 🎨 Locator Best Practices

* CSS Selectors
* XPath
* Role-Based Locators
* Attribute Priority
* Dynamic Attributes
* Stable Locator Design

---

# 🎯 Learning Objectives

After completing this repository, you will be able to:

* Configure Playwright projects using `defineConfig()`.
* Customize browser, execution, and reporting settings.
* Configure Playwright for CI/CD environments.
* Build reliable XPath expressions.
* Navigate complex DOM relationships using XPath Axes.
* Choose between CSS Selectors, XPath, and Playwright Locators.
* Follow industry-standard locator best practices.



# 💻 Technologies Used

* Playwright
* TypeScript
* Node.js
* XPath
* CSS Selectors

---

# 🚀 Practical Implementations

### ⚙️ Playwright Configuration

Configure:

* Test Execution
* Browser Settings
* Authentication
* Debugging
* Reporting
* CI/CD

---

### 🎯 XPath

Implement XPath using:

* Attributes
* Text
* Partial Attributes
* Partial Text
* Collections
* XPath Axes

---

### 🎨 CSS Selectors

Practice locating elements using:

* ID Selectors
* Class Selectors
* Attribute Selectors
* Multiple Attributes
* Partial Attribute Matching

---

### 🧪 Locator Strategies

Compare and implement:

* CSS Selectors
* XPath
* Playwright Role-Based Locators

---

# 🏗️ Locator Selection Strategy

```text
Locate Element
      │
      ▼
Role-Based Locator Available?
      │
   Yes ─────────► Use getByRole()
      │
      No
      ▼
Unique ID Available?
      │
   Yes ─────────► Use CSS ID Selector
      │
      No
      ▼
Stable Attribute Available?
      │
   Yes ─────────► Use CSS Attribute Selector
      │
      No
      ▼
Need Relationship-Based Navigation?
      │
   Yes ─────────► Use XPath Axes
      │
      No
      ▼
Review DOM Structure
```

---

# 📚 Key Concepts

| Concept                 | Description                           |
| ----------------------- | ------------------------------------- |
| `defineConfig()`        | Central Playwright configuration      |
| Execution Configuration | Controls test discovery and execution |
| Browser Configuration   | Browser-specific settings             |
| Network Configuration   | HTTP, Proxy, Base URL                 |
| Storage State           | Reuse authenticated sessions          |
| Trace                   | Step-by-step debugging                |
| Reporter                | Generate execution reports            |
| XPath                   | XML/HTML query language               |
| Relative XPath          | Preferred XPath strategy              |
| XPath Axes              | Navigate DOM relationships            |
| CSS Selector            | Fast and readable element locator     |
| Role-Based Locator      | Recommended Playwright locator        |

---

# 📚 Best Practices

* Prefer **Playwright Role-Based Locators** (`getByRole()`, `getByLabel()`, `getByText()`) whenever possible.
* Use CSS selectors before XPath for better performance and readability.
* Avoid Absolute XPath in automation scripts.
* Build Relative XPath using stable attributes.
* Use XPath Axes only when relationship-based navigation is required.
* Configure retries, trace, screenshots, and videos appropriately for CI/CD.
* Keep Playwright configuration centralized using `defineConfig()`.

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

Run a specific test

```bash
npx playwright test tests/example.spec.ts
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Open the HTML report

```bash
npx playwright show-report
```

---

# 🎓 Interview Preparation

This repository covers commonly asked Playwright interview topics, including:

* `defineConfig()` Configuration Options
* Test Execution Configuration
* Browser Configuration
* Storage State
* Playwright Reporters
* CI/CD Configuration
* XPath vs CSS Selectors
* Absolute vs Relative XPath
* XPath Axes
* Locator Best Practices
* Attribute Priority
* Role-Based Locators

---

# 🎯 Key Learning Outcome

By the end of this session, you will understand how to configure Playwright projects for enterprise automation, build maintainable locator strategies using XPath and CSS selectors, and apply industry best practices for scalable, reliable, and CI/CD-ready automation frameworks.

---

# 👨‍💻 Author

**Bhuvanesh**

*Playwright | TypeScript | UI Automation | Test Automation Framework Design*

---

⭐ If you find this repository helpful, consider giving it a **Star** and continue exploring the upcoming Playwright learning modules.
