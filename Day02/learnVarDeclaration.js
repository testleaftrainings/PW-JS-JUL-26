// 1. Declaration
// 2. initialized
var course ='playwright'// string
// 3. reinitialization
course="Cypress"
course= 534365
course = false
console.log(course);
// 4. reDeclaration
// Global variable
var course="selenium"
// 5. hoisting
console.log(duration);
var duration= "2 months"
// 6. Scoping 
function getNationality(){//function scope
    // scope is restricted to the function
    {//block scope 
        var countryName="india" // local variable
        console.log(course)
    }
    // data leakage?
    console.log(countryName)// india // ReferenceError
}
getNationality()
//console.log(countryName);//ReferenceError: countryName is not defined