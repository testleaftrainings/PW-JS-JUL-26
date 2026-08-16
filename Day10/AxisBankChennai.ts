import { RBI } from "./learnInterface";
import { AxisHQ } from "./axisBank";
class AxisBank extends AxisHQ implements RBI{
    loanApproval(): void {
        console.log("Loan approval limit will be upto 1 cr");  
    }
    upiPayment(): void {
        console.log("on behalf of RBI,NPCI will tracks all the online transctions");
    }
    repoRate(): void {
        console.log("repo rate is 5.25%");
    }
    kycMandatory(): void {
        console.log("Aadhar verification is now mandatory to create or renew a account");
    }
}
const axisChennai =new AxisBank()
axisChennai.kycMandatory()
axisChennai.repoRate()
axisChennai.upiPayment()
axisChennai.loanApproval()
axisChennai.headOfficeLocation()