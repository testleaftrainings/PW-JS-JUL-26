import test, { expect } from "@playwright/test";
import path from "path"

test("Learn FileUpload using the setInputFiles",async({page})=>{
   await page.goto("https://leafground.com/file.xhtml")
   const fileUploadButton = page.locator(`//input[@type='file']`).first()
   const filePath = path.join(__dirname,"../../data/QeagleLogo.jpeg")// C:\Users\DELL\PW_JUL_26\tests\day10
   console.log(filePath)
   await fileUploadButton.setInputFiles(filePath)
   const checkFileNameAfterUpload =page.locator(`.ui-fileupload-filename`)
   await expect(checkFileNameAfterUpload).toHaveText(/QeagleLogo.*/)
})
test.only("Learn FileUpload using the setFiles",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const [uploadFileChosser] = await Promise.all([page.waitForEvent("filechooser"),page.locator(`//div[@id='drag-drop-upload']`).click()])
                // array index 0 --> Register for the event   // array index 1 --> Triggering the event ["filechooser"]  
    await uploadFileChosser.setFiles(path.join(__dirname,"../../data/QeagleLogo.jpeg"))
    const chechDragdropFileUpload = page.locator(`(//div[@class='dz-filename']/span)`).first()
    await expect(chechDragdropFileUpload).toHaveText(/QeagleLogo.*/)
})