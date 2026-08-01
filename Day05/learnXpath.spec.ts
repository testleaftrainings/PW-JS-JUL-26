import test from "@playwright/test";
test("Learn Locating strategy using Xpath selector",async({page})=>{
   await page.goto("https://leaftaps.com/opentaps/control/login")
   // Absolute Xpath : / --> start with single flash followed by html
   //    await page.locator(`/html/body/div[2]/div[2]/div/form/p[1]/input`).fill("democsr")
   //    await page.locator(`/html/body/div[2]/div[2]/div/form/p[2]/input`).fill("crmsfa")
   //    await page.locator(`/html/body/div[2]/div[2]/div/form/p[3]/input`).click()

   // Relative Xpath : start with // --> double slash
   // 1) Attribute based xpath 
   // syntax ://tagname[@attribute="attribueValue"]
   await page.locator(`//input[@id="username"]`).fill("democsr")
   //await page.locator(`//input[@name="PASSWORD"]`).fill("crmsfa")
   // 2) Text based xpath
   // syntax: //tagname[text()="textOfTheElement"]
   const labelOfUsername=await page.locator(`//label[text()="Username"]`).innerText()
   console.log(labelOfUsername);
    // 3) Collection/index based xpath
    // syntax : (relativeXpath)[index]
   await page.locator(`(//input[@class="inputLogin"])[2]`).fill("crmsfa")
  // await page.locator(`//input[@type="submit"]`).click()
   // 4) Based on the contains filter match : 
   // syntax : //tagname[contains(@attributeName,"partialAttributeValue")]
   // syntax : //tagname[contains(text(),"partialVisibleText")]
   await page.locator(`//input[contains(@class,"Submit")]`).click()
   // manual wait - for debugging purpose only
   await page.waitForTimeout(2000)
   const titleofLP = await page.title()
   console.log(titleofLP);
})