// Primitive Data Type - Fixed
// 1. string --> collection of characters sequence[a-z,A-Z,0-9,@#$%]
// synatax : variableDeclaration identifierName 
// initilization :  = --> assignment operator 
var firstName // declaration // memory size --> 0
// initilization
firstName = `Bhuvanesh`
console.log(firstName) 
// 2. number :  interger, wholenumber[10], decimal[10.05]
var empId = 876767
console.log(empId) 
// 3. boolean : true/false
var isInsured = true 
console.log(isInsured)
// 4 . undefined
var landlineNumber  // implicitly 
console.log(landlineNumber)
// 5.  Null
var vechinleNumber = null // 000 // explicitly
console.log(vechinleNumber);
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(typeof firstName,typeof empId, typeof isInsured,typeof vechinleNumber)// 000 --> object