import test from "@playwright/test";

test("Learn Storage State", async ({ page }) => {
  await page.goto('https://uibank.uipath.com/welcome');
  await page.getByRole('textbox', { name: 'Username' }).fill('FebApiuser');
  await page.getByRole('textbox', { name: 'Password' }).fill('Eagle@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'I agree to the Privacy Policy' }).click();
  await page.getByText('Apply For New Account').click();
  await page.context().storageState({ path: "data/auth.json" })
  // Printing the Local Storage Info
  const localData = await page.evaluate(() => ({ ...localStorage }));
  console.log('local storage state is captured', localData)
})