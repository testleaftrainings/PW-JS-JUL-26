import test from "@playwright/test";
test("Learn to handle the element inside iframe Tag",async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    // frame is a html document embedded inside an another html document
    const arrayOfFrames =page.frames()
    for(let i=0; i<arrayOfFrames.length;i++){
        console.log(arrayOfFrames[i].url());
         console.log(arrayOfFrames[i].name());  
    }
    // approch no 1 : frame()
    await page.frame({url:"https://leafground.com/default.xhtml"})?.getByRole("button").click()

    // approcah no 2 : frameLocator()
                                                       // 3rd iframe        // 4th iframe 
    const innerIframe =  page.frameLocator(`//iframe[@src="page.xhtml"]`).frameLocator("#frame2").getByRole("button")                                 
    await innerIframe.click() 
    const innerIframeText = await innerIframe.innerText()
    console.log("text retrieved after click the button : "+innerIframeText);
})