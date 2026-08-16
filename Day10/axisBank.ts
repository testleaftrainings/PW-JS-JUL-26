export abstract class AxisHQ{
// Literal abstraction 
// 1) it can act as both interface and simple ts class
// implemented methods
headOfficeLocation():void{
console.log("Headquaters of axis bank is mumbai");
}
// unimplemented methods
abstract loanApproval():void;
constructor(){
    console.log("consturctor of the abstract class");
    
}
}
// new AxisHQ() //Cannot create an instance of an abstract class.
// loanApproval() is incomplete,