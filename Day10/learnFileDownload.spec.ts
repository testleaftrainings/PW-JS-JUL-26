import test, { expect } from "@playwright/test";
import path from 'path'
import fs from 'fs'

test("Learn File Download using the event listerner",async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")
    const [downloadFileEvent] = await Promise.all([page.waitForEvent("download"),// array index 0 --> Register for the event  ["download"] 
        page.getByRole('button',{name: " Download",exact:true}).click()])
                   // array index 1 --> Triggering the event ["download"] 
    const filePath = path.join(__dirname,"../../data/",downloadFileEvent.suggestedFilename())// C:\Users\DELL\PW_JUL_26\data\filename.extension
    console.log(filePath)
    await downloadFileEvent.saveAs(filePath)     
    expect(fs.existsSync(filePath)).toBeTruthy()           
})