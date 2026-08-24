import test from '@playwright/test';
import dotenv from 'dotenv'
const fileName = process.env.terminalEnvVariable
const result =dotenv.config({path:`./data/${fileName}_LF.env`})

if(result.error){
    console.log("Env file could not be loaded",result.error)
}else{
    console.log("Env file is loaded successfully");
}
console.log(process.env.HOSTNAME,process.env.HOSTPASS);

test("Learn to pass the test data through the env file",async({page})=>{
     await page.goto(process.env.BASE_URL as string)
        const usernameField = page.getByRole(`textbox`, { name: "Username" })
        await usernameField.fill(process.env.ADMIN_USERNAME as string)
        await page.getByLabel(`Password`).fill(process.env.PASSWAORD as string)
        await page.getByRole(`button`).click()
})