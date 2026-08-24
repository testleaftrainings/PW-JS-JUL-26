import test from "@playwright/test"
import credData from "../../data/LF_Login.json"
import {parse} from "csv-parse/sync"
import fs from "fs"

// parse --> 
// argument 1 --> if you provide a csv file path here, it will parse into the object
// argument 2 --> customizing the parsed the object
let records :any[] = parse(fs.readFileSync("./data/LF_Lead.csv"),{columns:true,skip_empty_lines:true})

test.describe.serial("learn json parameterization",async()=>{
  for(let credential of credData){ 
    for(let testData of records){
test(`Execute the test based on the role ${credential.role}- data set count is ${testData.dataSetNo as string}`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
        const usernameField = page.getByRole(`textbox`, { name: "Username" })
        await usernameField.fill(credential.username)
        await page.getByLabel(`Password`).fill(credential.password)
        await page.getByRole(`button`).click()
        const welcomeMessage = await page.getByRole("heading").innerText()
        console.log(welcomeMessage)
        await page.getByRole("link", { name: "CRM/SFA" }).click()
        await page.getByText("Leads", { exact: true }).click()
        await page.getByRole('link', { name: 'Create Lead'}).click()
        await page.locator(`#createLeadForm_companyName`).fill(testData.companyName as string)
        await page.locator(`#createLeadForm_firstName`).fill(testData.firstName as string)
        await page.locator(`#createLeadForm_lastName`).fill(testData.lastName as string)
})
}
} 
})