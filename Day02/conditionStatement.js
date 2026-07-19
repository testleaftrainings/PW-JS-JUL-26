//----------------- Business rule : amazon prime-------------------- 
// 1. click --> play --> prime subscriber --> true
// 2. click --> subscription --> not a prime subscriber --> false
// Amazon DB the user related information will be fetched
let isPrimeUser= true
// clicking the movie icon
// if else
    // false === true ---> false
if (isPrimeUser===true) { // condition is satified the block got executed
    console.log("the movie starts to play in the player")
}else{//fall back
console.log("the user will be redirected to subscripton page")
}

//---------------- Business rule : Income Filing--------------------
// condition 1 : below 3 no tax ---> 0%
// condition 2 : above 3 and below 10 ---> 15%
// condition 3 : above 10 ---> 30%
let userIncome= 1
if(userIncome<3){
    console.log("the user is been the tax exemption --> 0% deducted")
}else if(userIncome>=3 && userIncome<=10){
    console.log("the user has been the taxed --> 15% deducted")
}else{
     console.log("the user has been the taxed --> 30% deducted")
}
// switch case
let browserName="chrome"

switch (browserName) {
    case "chrome":
        console.log("150.0.7871.125")
        break
    case "edge":
        console.log("150.0.4078.65")
        break;
     case "firefox":
        console.log("152.0.6")
        break  
    default: //fallback
     console.log("Unsupported browser for this machine")
        break;
}