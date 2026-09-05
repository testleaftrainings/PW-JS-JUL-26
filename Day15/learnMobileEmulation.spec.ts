import test from "@playwright/test";

test("Learn to emulate the device based testing", async ({ page }) => {
  await page.goto("https://login.salesforce.com/?locale=in")
  await page.getByRole("textbox", { name: "Username" }).fill("bhuvanesh.qeagle.1ce512d00545@agentforce.com")
  await page.getByRole("button", { name: "Log In" }).click()
  await page.getByLabel("Password").fill("Qeagle@2026")
}
)