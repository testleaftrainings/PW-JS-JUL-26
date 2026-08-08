import test from "@playwright/test"
test("Learn Dialoag Hanlding",async({page})=>{
    await page.goto("https://leafground.com/alert.xhtml")
    // event registaring once after the url is loaded - dialog/alert to appear
    page.on("dialog",async(alert)=>{
        let alertType =alert.type()
        console.log(alertType);
        console.log(alert.message());
        // action can be handled within the switch case
        switch (alertType) {
            case "confirm":
                await alert.accept()
                break;
            case "prompt":
                await alert.accept("Bhuvanesh")
                break;    
            default:
                await alert.dismiss()
                break;
        }
    })

    // 1) simple modal dialog/alert -->  accepted
    await page.locator(`//h5[text()=" Alert (Simple Dialog)"]/following-sibling::button`).click()
    await page.waitForTimeout(2000)
    //await page.getByRole("button",{name: " Show"}).click()
    // 2) confirmation dialog/modal alert --> dismissed
    await page.locator(`//h5[text()=" Alert (Confirm Dialog)"]/following-sibling::button`).click()
    await page.waitForTimeout(2000)
    // 3) prompt modal --> enter input, accept, dismiss--> dismissed
    await page.locator(`//h5[text()=" Alert (Prompt Dialog)"]/following-sibling::button`).click()
    let confirmationText =await page.locator(`#confirm_result`).innerText()
    console.log(confirmationText);
})