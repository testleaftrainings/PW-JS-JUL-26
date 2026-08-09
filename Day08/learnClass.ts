class TestleafHRM{
// Global scope    
employeeName:string// declare the variable // Global scope
employeeId:number
// encapsulation is implemented via access modifiers
fetchEmployeeDetails(){
// Local variable  
// this keyword--> reference the current class instance or property
 console.log(`The employee name is ${this.employeeName}, Employee Id is ${this.employeeId}`);
}
constructor(name:string,id:number){
    console.log("Contructor is invoked immediately, Once after creation of Object");
    this.employeeName=name // intialization will happen at runtime
    this.employeeId=id
}
}
// object[instance of the class]
// constructor is a special method, it has the same name as the class
// benefit : It act as the instance member(gloabl variable) initializer
// syntax : new ClassName()
// constructor TestleafHRM(): TestleafHRM
// this --> new ClassName()
const obj =new TestleafHRM("Bhuvanesh",1882) // obj --> ajoie9373dbhah@48!hjidj
console.log(obj.employeeName);
obj.fetchEmployeeDetails()

const obj2 =new TestleafHRM("Vinoth",1263) // obj --> ueevslecf!746#)k03;
console.log(obj2.employeeName);
obj2.fetchEmployeeDetails()