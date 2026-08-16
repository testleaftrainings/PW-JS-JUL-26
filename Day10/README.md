# 🚀 Day 10 – Multiple Windows, File Upload & Download

Welcome to **Day 10** of the Playwright learning series.

This repository focuses on handling **Multiple Windows/Tabs**, **File Upload**, and **File Download** using Playwright's event-driven APIs.

---

## 📚 Topics Covered

### 🪟 Multiple Windows & Tabs

* Handling Multiple Pages
* `context.waitForEvent('page')`
* `page.waitForEvent('popup')`
* Sequential Event Handling
* `Promise.all()`
* Popup vs New Page

### 📤 File Upload

* `setInputFiles()`
* Single File Upload
* Multiple File Upload
* Removing Uploaded Files
* `filechooser` Event
* `page.waitForEvent('filechooser')`

### 📥 File Download

* `page.waitForEvent('download')`
* `suggestedFilename()`
* `saveAs()`
* `path()`

### 🔔 Event Handling

* `page.on()`
* `page.waitForEvent()`
* One-Time vs Continuous Event Listeners
* Event Synchronization

---

## 🎯 Learning Objectives

After completing this session, you will be able to:

* Handle new tabs and windows using Playwright.
* Differentiate `popup` and `page` events.
* Synchronize actions and events using `Promise.all()`.
* Upload single and multiple files.
* Handle file chooser events.
* Capture and save downloaded files.
* Understand Playwright's event-driven approach.

---

## 🏗️ Event Handling Pattern

```text
Listen for Event
       │
       ▼
Trigger Action
       │
       ▼
Event Occurs
       │
       ▼
Capture Event Object
       │
       ▼
Perform Required Operation
```

### Common Pattern

```ts
const [event] = await Promise.all([
    page.waitForEvent('event'),
    page.click('trigger')
]);
```

---

## 📚 Key APIs

| API                            | Purpose                               |
| ------------------------------ | ------------------------------------- |
| `context.waitForEvent('page')` | Capture a new page in the context     |
| `page.waitForEvent('popup')`   | Capture a popup from the current page |
| `setInputFiles()`              | Upload files directly                 |
| `waitForEvent('filechooser')`  | Handle file chooser                   |
| `waitForEvent('download')`     | Capture a download                    |
| `suggestedFilename()`          | Get download filename                 |
| `saveAs()`                     | Save downloaded file                  |
| `path()`                       | Get downloaded file path              |
| `page.on()`                    | Register continuous event listener    |

---

## 📤 File Upload

### Direct Upload

```ts
await page.locator('#file-upload')
    .setInputFiles('./test-data/sample.pdf');
```

### Multiple Files

```ts
await page.locator('#file-upload')
    .setInputFiles([
        './test-data/file1.pdf',
        './test-data/file2.pdf'
    ]);
```

---

## 📥 File Download

```ts
const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByText('Download').click()
]);

await download.saveAs(
    `downloads/${download.suggestedFilename()}`
);
```

---

## 📚 Best Practices

* Register event listeners before triggering the action.
* Prefer `Promise.all()` when an action immediately triggers an event.
* Use `setInputFiles()` for standard file input elements.
* Use `filechooser` when the application triggers a file picker.
* Use `waitForEvent('download')` to reliably capture downloads.
* Prefer `waitForEvent()` for one-time event synchronization.

---

## 🎓 Interview Preparation

Key interview topics include:

* `page.waitForEvent('popup')` vs `context.waitForEvent('page')`
* Why use `Promise.all()` for event handling?
* `setInputFiles()` vs FileChooser
* `page.on()` vs `page.waitForEvent()`
* How to upload multiple files?
* How to handle file downloads?
* `suggestedFilename()` vs `saveAs()` vs `path()`

---

## 🎯 Quick Revision

```text
Multiple Windows
→ page.waitForEvent('popup')
→ context.waitForEvent('page')

File Upload
→ setInputFiles()
→ filechooser

File Download
→ waitForEvent('download')
→ suggestedFilename()
→ saveAs()
→ path()

Event Pattern
→ Listen First
→ Trigger Action
→ Capture Event
```

---

## 👨‍💻 Author

**Bhuvanesh**

*Playwright | TypeScript | UI Automation | Test Automation Framework Design*

---

⭐ If you find this repository helpful, consider giving it a **Star**.
