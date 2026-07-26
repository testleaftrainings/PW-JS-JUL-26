import test, { webkit } from "@playwright/test";

test("Learn to create a local configuration",async()=>{
    // step 1 : launching the required browser
   // const browser = await chromium.launch({channel:"msedge",headless:false})
   // const browser = await firefox.launch({headless:false})
   const browser = await webkit.launch({headless:false})
    // step 2 : create a new context/profile
    const context1 = await browser.newContext()
    // step 3 : create a new page/tab
    const page = await context1.newPage()
    // step 4 : Loaded the url using goto()
    await page.goto("https://leaftaps.com/opentaps/control/main")
    // step 5 : verify the tile using title()
    const titleOfPage =await page.title()
    console.log(`the landing page title is ${titleOfPage}`);
})