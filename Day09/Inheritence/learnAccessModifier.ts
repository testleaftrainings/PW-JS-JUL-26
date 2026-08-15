export class WrapperClass{
static frameworkName:string="HybridPlaywrightFW"
public readonly browserName:string="Chrome"
// encapsulation
private token:string=""
// getter property
public get getToken() : string {
    return this.token
}
// setter property
public set setToken(tokenValue : string) {
    this.token = tokenValue;
}

static frameworkDesign(){
console.log("Page Object Model as the core design pattern");
}

public clickElement(){
    console.log("Element clicked successfully");  
}
protected enterText(){
    console.log("Text entered successfully");
}
// private method is encapsulated inside the publi method
// private captureToken(){
//     console.log("Token captured successfully");
// }
// public perform(){
//     this.captureToken()
// }
}
// static methods called directly using the class name
console.log(WrapperClass.frameworkName);
WrapperClass.frameworkDesign()
// non static methods called using the instance of the class
const wrap = new WrapperClass()
wrap.clickElement()
wrap.setToken="abc124ba"
wrap.getToken
//wrap.browserName="edge" // read only will not me to override the value 
console.log(wrap.browserName); // chrome
//--> Property 'browserName' is protected and only accessible within class 'WrapperClass' and its subclasses.
//--> Property 'browserName' is private and only accessible within class 'WrapperClass'