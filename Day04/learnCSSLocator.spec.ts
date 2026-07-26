import test from "@playwright/test";
test("Learn Locating strategy using CSS selector",async({page})=>{
   await page.goto("https://leaftaps.com/opentaps/control/login")
   await page.locator(`#username`).fill("demosalesmanager")
   // manual wait - for debugging purpose only
   await page.waitForTimeout(2000)
   // [class="inputLogin"]
   //await page.locator(`.inputLogin`).nth(1).fill("crmsfa")// 1st fill
   await page.locator(`.inputLogin`).last().fill("crmsfa")
   // first()
   // last()
   // nth()
   await page.locator(`.decorativeSubmit`).click()
   await page.locator(`#label>a`).click()
   const titleofLP = await page.title()
   console.log(titleofLP);
   

})