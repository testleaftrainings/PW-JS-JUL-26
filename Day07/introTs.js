// statically typed // strictly type
var course = "Playwright"; // implicit inference
var courseDuration = 2; // explicit inference
// functions in ts
function add(a, b) {
    return a + b;
}
console.log(add(65, 87));
// all the javascript datatype is applicable here in ts too
// other special typescript datatypes are :
// 1.any --> it to implement the dynamically type behaviour to ts,
// before executing it does ask the compiler to check the type
// let response:any=true
// response="true"
// response=201
// console.log(response.upperCase());
//TypeError: response.upperCase is not a function
// 2.unknown --> implement the dynamically type, it compiler to check the type
var response = true;
response = "true";
console.log(response.toUpperCase());
// type assertion --> to skip the which compiler error
// 3. never --> infinite, forcefully terminate the runtime 
// function stopExecution(message:string):never{
//   throw new Error(message)
// }
// stopExecution("NEW error is identify in the run time")
// 4.Tuple --> similar grouped data's to be stored 
//let mentorlist = ["Gautami","Seeni","Vinoth","Anbu","Sangir","Yuvarani"]
//  name, empid, phno, isInsured
var empDetails = ["Gauthami", 4534, 8363537535, true];
// tuple --[0]---string
// tuple --[1]---number
// tuple --[2]---number
// tuple --[3]---boolean
console.log(empDetails);
// object literals - alternative of array data structure
var empInfo = {
    name: "bhuvanesh",
    empid: 6353,
    insured: true
};
// Type checker specific implementations
// let empInfo:{
//     name:string,
//     empid:number,
//     insured:boolean 
// }={
//     name:"bhuvanesh",
//     empid:6353,
//     insured:true
// }
console.log(empInfo.name);
