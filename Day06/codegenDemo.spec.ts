import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://uibank.uipath.com/welcome');
  await page.getByRole('textbox', { name: 'Username' }).fill('FebApiuser');
  await page.getByRole('textbox', { name: 'Password' }).fill('Eagle@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'I agree to the Privacy Policy' }).click();
  await page.getByText('Apply For New Account').click();
  await page.getByRole('textbox', { name: 'Give a Nickname to Your' }).click();
  e('textbox', { name: 'Give a Nickname to Your' }).fill('Bhuvanesh');
  await page.getByLabel('Type of Account').selectOption('savings');
  await page.getByRole('button', { name: 'Apply' }).click();
});