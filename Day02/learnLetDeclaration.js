let course // 1. Declaration
course='playwright'// 2. initialized
// 3. reinitialization
course="Cypress"
course= 534365
course = false
console.log(course);
// 4. reDeclaration
// Global variable
// let course="selenium"
// console.log(course);//  Identifier 'course' has already been declared
// 5. hoisting
// console.log(duration); // Cannot access 'duration' before initialization
// let duration= "2 months"
function getNationality(){//function scope
    // scope is restricted to the function
    {// block scope 
        let countryName="india" // local variable
        console.log(course)
    }
    // data leakage? no
    console.log(countryName) // ReferenceError
}
getNationality()