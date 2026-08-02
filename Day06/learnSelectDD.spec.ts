import test, { expect } from "@playwright/test";
test("learn Dropdown handling",async({page})=>{
    // Select DropDown
    // <select> headinfo<option> </option>
    await page.goto("https://leafground.com/select.xhtml")
    // value?: string; --> value="LEAD_COLDCALL"--> attribute inside the option tag
    // label?: string; --> visbile part which is displayed in the dropdown -->Playwright
    // index?: number; --> order in which the options is displayed
    console.log("Fetching the values inside the select dropdown");
    const dropdownValues = await page.locator("select.ui-selectonemenu>option").all()
    const count = dropdownValues.length
    console.log("Total values inside the dropdown is "+count)
    for(let i=0; i<count; i++){
       const option = await dropdownValues[i].innerText()
       console.log(option);
       if(option==="Playwright"){
        await page.selectOption("select.ui-selectonemenu",{index:i})
       }
    }
    //await page.selectOption("select.ui-selectonemenu",{label:"Playwright"})
    //await page.getByRole("option",{name:"Playwright"}).click()
    await expect(page.locator("select.ui-selectonemenu")).toHaveValue("Playwright")
})