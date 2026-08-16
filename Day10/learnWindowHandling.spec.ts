import test from "@playwright/test"

test("Learn to handling the newly opened tab",async({page,context})=>{
   await page.goto("https://leafground.com/window.xhtml")
   // Register for the event 
   const pageRegister = context.waitForEvent('page')
   await page.getByRole("button",{name:"Open",exact: true}).click()
   const childPage = await pageRegister
   const childPageTitle =await childPage.title()
   console.log(childPageTitle);
   await childPage.getByRole("textbox",{name :"E-mail Address",exact: true}).fill("bhuvanesh@testleaf.com")
})
test.only("Learn to handling the Mutliple newly opened tab",async({page,context})=>{
    await page.goto("https://leafground.com/window.xhtml")
    const [windows]  = await Promise.all([context.waitForEvent('page'),page.getByRole("button",{name:"Open Multiple",exact: true}).click()])
                           // array index 0 --> Register for the event   // array index 1 --> Triggering the event ["page"]  
    const allPageInstance = windows.context().pages()
    console.log(allPageInstance.length);
    let instanceOfDashboardPage:any
    for(let childpage of allPageInstance){
      const titleOfNewTab = await childpage.title()
      console.log(titleOfNewTab)
      if(titleOfNewTab==="Dashboard"){
         instanceOfDashboardPage =  childpage
      }
    }
     await instanceOfDashboardPage.bringToFront()
     await instanceOfDashboardPage.getByRole("textbox",{name :"E-mail Address",exact: true}).fill("bhuvanesh@testleaf.com")
})