import { RBI } from "./learnInterface";
class AxisBank implements RBI{
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