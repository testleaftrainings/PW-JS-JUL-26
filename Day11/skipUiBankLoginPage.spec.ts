import test from "@playwright/test";

test.use({storageState:"data/auth.json"})
test("Learn to bypass login page using storage state",async({page})=>{
   await page.goto("https://uibank.uipath.com/accounts/account-apply")
   await page.getByRole('textbox', { name: 'Give a Nickname to Your' }).click();
  await page.getByRole('textbox', { name: 'Give a Nickname to Your' }).fill('PW_JULY_26_Demo');
  await page.getByLabel('Type of Account').selectOption('savings');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('heading', { name: 'You\'ve been approved for a' }).click();
  await page.getByRole('heading', { name: 'You\'ve been approved for a' }).click();
  await page.getByText('View Your Accounts').click(); 
})