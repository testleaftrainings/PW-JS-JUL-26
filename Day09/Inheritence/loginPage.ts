import { WrapperClass} from "./learnAccessModifier"

export class TLLoginPage extends WrapperClass {
    public enterUsername(){
        this.enterText()
    }
    public enterPassword(){
        this.enterText()
    }
    public clickLoginButton(){
        this.clickElement()
        this.setToken="87hhde736ad%#ha"
    }
}

const login =new TLLoginPage()
login.enterPassword()
login.enterUsername()
login.clickLoginButton()
console.log(login.getToken);