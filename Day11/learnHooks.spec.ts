import test from "@playwright/test";

test.describe.serial("Managing the Playwright hooks", { tag: "@HookImp" }, async () => {
    test.beforeAll("Basic CRM level configuration", async () => {
        console.log("Executes once per exeution")
    })

    test.beforeEach("Pre-condition", async ({ page }) => {
        await page.goto("https://leaftaps.com/opentaps/control/login")
        const usernameField = page.getByRole(`textbox`, { name: "Username" })
        await usernameField.fill("democsr")
        await page.getByLabel(`Password`).fill("crmsfa")
        await page.getByRole(`button`).click()
        const welcomeMessage = await page.getByRole("heading").innerText()
        console.log(welcomeMessage)
        await page.getByRole("link", { name: "CRM/SFA" }).click()
    })

    test("Create Lead", {
        annotation: {
            type: 'Requirement',
            description: 'User Story-53653 user should able to create a new lead',
        }, tag: '@LeadCreation'
    }, async ({ page }) => {

        await test.step('Launch Leaftaps and navigate to  Lead Module', async () => {
            await page.getByText("Leads", { exact: true }).click()
        })

        await test.step('Navigate to Create lead page', async () => {
             await page.getByText("Create Lead", { exact: true }).click()
        })
       
       
    })

    test("Create Contact", async ({ page }) => {
        await page.getByText("Contacts", { exact: true }).click()
    })

    test("Create Accounts", async ({ page }) => {
        await page.getByText("Accounts", { exact: true }).click()
    })

    test.afterEach("Print the status of the test", async ({ }, testInfo) => {
        console.log("It will executed after the test annotation");
        console.log(testInfo.title,testInfo.titlePath,testInfo.errors)
        if (testInfo.status === 'passed') {
            console.log("Test is passed")
        } else {
            console.log("Test failed")
        }
    })

    test.afterAll("Global tear down annotation", async () => {
        console.log("Closed the resource, before the test execution is completed")
    })

})