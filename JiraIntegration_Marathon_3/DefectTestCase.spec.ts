import test from "@playwright/test"

import {logADefectInJira} from "./DefectLog"

test ("Login Testcase",async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/login")
await page.locator("#username").fill("DemoCSR")
await page.locator("#password").fill("crmsfa")
await page.locator("#decorativeSubmit").click()

})

test.afterAll(async({},testinfo)=>{

    await logADefectInJira(testinfo)
    
})