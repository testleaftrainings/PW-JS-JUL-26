import test, { expect } from "@playwright/test";
//Bombay IIT, 19.1326° N, 72.9110° E
//Kanpur IIT, 26° 30' 47.3519" N, 80° 13' 58.4789" E

const locations = [{
    locationName: 'Bombay IIT',
    lat: 19.1326,
    long: 72.9110
},
{
    locationName: 'Delhi IIT',
    lat: 28.5450,
    long: 77.1922
}]

for (const location of locations) {
    test.describe.serial("Multiple geolocation testing", async () => {
        test.use({
            geolocation: {
                latitude: location.lat,
                longitude: location.long
            }, permissions: ['geolocation']
        })
        test(`Learn Geo mocking using proxy latitude and longtidue -${location.locationName}`, async ({ page }) => {
           
            //--------------Network mocking ----------------------------
            await page.route('**/*doubleclick.net/**', route => route.abort())
            await page.route('**/*googlesyndication.com/**', route => route.abort())
            await page.route('**/*googletagmanager.com/**', route => route.abort())
            
            await page.goto("https://my-location.org/")
            const mapView = page.locator(`//div[@id='map']`)
            await mapView.scrollIntoViewIfNeeded()
            await page.waitForTimeout(3000)
            //mapView.screenshot({path: `screeshot/${location.locationName}.png`})
            
            //----------------Visual Regression Testing------------------------ 
            await expect(page.locator(`#latitude`)).toHaveScreenshot(`${location.lat}-geo.png`)
            await expect(page.locator(`#longitude`)).toHaveScreenshot(`${location.long}-geo.png`)
            await expect(mapView).toHaveScreenshot(`${location.locationName}.png`, {
                maxDiffPixelRatio: 0.01
            })
        })// test function scope ends here
    })// describe function scope ends here
} // boundary of foreach loop scope ends here