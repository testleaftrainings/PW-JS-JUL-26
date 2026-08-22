# 🚀 Playwright Day 11 – Storage State, Browser Storage & Test Organization

This repository contains the Day 11 learning materials and code examples for Playwright. It covers authentication persistence, browser storage, test organization, annotations, tags, hooks, and enterprise-level test structure.

---

## 📖 Topics Covered

- Browser Context
- Storage State (`storageState()`)
- Local Storage vs Session Storage vs Cookies
- Working with Browser Storage
- `page.evaluate()`
- Test Organization
- `test.describe()`
- Playwright Annotations
- Tags
- Custom Annotations
- `test.step()`
- Playwright Hooks
- TestNG vs Playwright Mapping
- Enterprise Project Structure
- Interview Questions

---

## 📂 Repository Structure

```text
Day11/
│
├── learnHooks.spec.ts
├── testOrgAnnotations.spec.ts
├── skipUiBankLogin.spec.ts
└── uiBankLogin.spec.ts
```

---

## 🎯 Learning Objectives

After completing this session, you will be able to:

- Understand Browser Context in Playwright
- Persist authentication using `storageState()`
- Differentiate Local Storage, Session Storage, and Cookies
- Access browser storage using `page.evaluate()`
- Organize Playwright tests using `test.describe()`
- Use annotations, tags, and hooks effectively
- Follow enterprise-level test organization practices

---

## 💻 Key Concepts

### Authentication Persistence

- Save authenticated browser state using `storageState()`
- Reuse login sessions across multiple test cases
- Reduce execution time by avoiding repeated logins

### Browser Storage

- Local Storage
- Session Storage
- Cookies

### Test Organization

- `test.describe()`
- `test.step()`
- Hooks
- Tags
- Annotations

---

## 🛠 Technologies Used

- Playwright
- TypeScript
- Node.js

---

## ▶️ Run the Tests

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

Run Smoke Tests

```bash
npx playwright test --grep "@smoke"
```

---

## 📚 Best Practices

- Reuse authentication using Storage State
- Group related tests with `test.describe()`
- Use hooks for setup and cleanup
- Organize tests using tags and annotations
- Keep tests independent and maintainable

---

## 🎓 Interview Preparation

This repository also includes concepts frequently asked in Playwright interviews, including:

- Browser Context
- Storage State
- Browser Storage
- Hooks
- Annotations
- Tags
- `test.step()`
- Test Organization

---

## 📖 References

- Playwright Official Documentation
- MDN Web Docs

---

## 👨‍💻 Author

**Bhuvanesh**

*Playwright | TypeScript | Test Automation*

---

⭐ If you find this repository useful, consider giving it a star.