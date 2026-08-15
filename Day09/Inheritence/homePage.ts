 import { TLLoginPage } from "./loginPage";
 class TLHomePage extends TLLoginPage{
// method overriding // customized implementation   
public clickElement(){
    // parent class reference
    super.clickElement()
    console.log("Crmsfa link clicked successfully clicked successfully in home page");  
}
}
// object creation
const home =new TLHomePage()
home.clickElement()
