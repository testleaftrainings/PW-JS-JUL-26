import test, { chromium } from "@playwright/test";

test('bypass authentication using presistent context',async()=>{
    const userDataDir ='./contextData'
    const perContext = await chromium.launchPersistentContext(userDataDir,{
        headless:false,
        httpCredentials: { 
            username: "admin", 
            password: "testleaf"
        },
        permissions:['notifications']

    })
    const page =await perContext.newPage()
    await page.goto('https://leafground.com/auth.xhtml')
    await page.getByRole('button', { name: 'Basic Auth' }).click()
    await page.waitForTimeout(5000)
})