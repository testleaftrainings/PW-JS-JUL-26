// 1. Function 
// parameterization
// no argument
function greet(userName){
console.log(`Hi ${userName}, welcome to testleaf`);
}
greet("Avila") // caller
// 2.function expression
let addNum = function (a,b){
    let c =a+b
    return c
}
console.log(addNum(736,3583))
// 3. Arrow Function
// a,b[operand] --> a+b[solution]
// let add= (a,b)=>{console.log(a+b)}
let add=(a,b)=>a+b
// 4. IIFE
// there explicit calling or caller is not needed
;(function(userName){
console.log(`username is enter as ${userName}`)
})("demoSalesManager")
console.log(add(563,353)/10);// caller for arrow function