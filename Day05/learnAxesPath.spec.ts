import test from "@playwright/test";

test("Learn to locate element using Advance Relative Xpath",async({page})=>{
    // Define a relationship between the tags
    // totally 8 important tag relationship 
    await page.goto("https://leaftaps.com/opentaps/control/login")
    // 1) Parent to child  --> Top:Bottom
    // syntax : (xpathOfParent)/(childTagName)
    // example: //p[@class="top"]/input
    await page.locator(`//p[@class="top"]/input`).fill("democsr")
    // 2) Child to Parent --> Bottom:Top
    // syntax : (xpathForChild)/parent::parentTagName 
    // example: //input[@id="username"]/parent::p
    // 3) GrandParent to GrandChild --> Top:Bottom  
    // syntax :  (xpathForGP)//tagnameOfGC
    // example : //form[@id="login"]//label
    // example : //form[@id="login"]//input 
    // 4) GrandChild to GrandParent --> Bottom:Top
    // syntax : (xpathOfGC)/ancestor::tagNameOfGP
    // example : //label[text()="Username"]/ancestor::form
    // 5) Sibling : Elder Sibling to Younger Sibling --> Top:Bottom 
    // syntax : xpathOfES/following-sibling::tagNameOfYS
    // example : //label[text()="Password"]/following-sibling::input
    await page.locator(`//label[text()="Password"]/following-sibling::input`).fill("crmsfa")
    // 6) Sibling : Younger Sibling to Elder Sibling --> Bottom:Top
    // syntax : xpahtOfYS/preceding-sibling::tagNameOfES
    // example: //input[@name="PASSWORD"]/preceding-sibling::label
    const labelOfUsername=await page.locator(`//input[@name="PASSWORD"]/preceding-sibling::label`).innerText()
    console.log(labelOfUsername);
    // 7) Cousin : Elder Cousin to Younger Cousin --> Top:Bottom
    // syntax : xpathElderCousin/following::tagnameOfYC
    // example : //input[@name="PASSWORD"]/following::input
    await page.locator(`//input[@name="PASSWORD"]/following::input`).click()
    // 8) Cousin : Younger Cousin to Elder Cousin --> Bottom:Top
    // syntax : xpathOfYC/preceding::tagnameOfEC
    // example : //input[@name="PASSWORD"]/preceding::input
})