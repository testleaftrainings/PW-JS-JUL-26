// alias ? CR7--> Ronaldo
// customizing the type for the execution flexibility
// due to type check the data structure
// Object literal --> key : value --> pair
var bhuvaneshInfo = {
    firstName: "Bhuvanesh",
    empId: 8082,
    phNo: 873637,
    designation: "Sr.SDET",
    midTermAdjustment: true,
    parkingNo: 65765
};
console.log(bhuvaneshInfo);
var fbUserName = "testleaf.2026@gmail.com";
fbUserName = 93863636;
//let launchBrowser : standardBrowser ="Chrome"
function crossBrowserTesting(browserName) {
    switch (browserName) {
        case "Chrome":
            console.log("Chrome Browser Launched successfully");
            break;
        case "Edge":
            console.log("Chrome Browser Launched successfully");
            break;
        case "Firefox":
            console.log("Chrome Browser Launched successfully");
            break;
        case "Safari":
            console.log("Chrome Browser Launched successfully");
            break;
        default:
            console.log("Please enter the valid browser name");
            break;
    }
}
crossBrowserTesting("Chrome");
var hrmPortal = {
    name: "Vinoth",
    id: 93876,
    insuredState: true
};
console.log(hrmPortal.name);
