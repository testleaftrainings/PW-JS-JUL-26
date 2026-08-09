// customizing the type for the execution flexibility
// due to type check the data structure
// Object literal --> key : value --> pair
let bhuvaneshInfo:{
    firstName : string,
    empId: number,
    phNo :number,
    designation:string,
    midTermAdjustment:boolean,
    parkingNo:number
}={
    firstName:"Bhuvanesh",
    empId:8082,
    phNo:873637,
    designation:"Sr.SDET",
    midTermAdjustment:true,
    parkingNo:65765
}
console.log(bhuvaneshInfo);

// Type Alias : customed Type
// | --> or --> Union 
// string | number
type fb = string | number 
let fbUserName : fb = "testleaf.2026@gmail.com"
fbUserName=93863636
// fbUserName= true --> it will shoot the compile time error
type standardBrowser ="Chrome"|"Edge"|"Firefox"|"Safari"
//let launchBrowser : standardBrowser ="Chrome"
function crossBrowserTesting(browserName:standardBrowser){
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
crossBrowserTesting("Chrome") 
 
// & --> and --> Intersection
//type empDetails = number & string & boolean //type empDetails = never
type employeInfo ={ // DB of Employee --> Within Company
    name: string,
    id:number
}
type insuranceInfo={ // DB of 3rd party[insurance Company]
    insuredState:boolean
} 
type empDetails = employeInfo & insuranceInfo
let hrmPortal : empDetails ={
    name:"Vinoth",
    id :93876,
    insuredState:true
}
console.log(hrmPortal.name);