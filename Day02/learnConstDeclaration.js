const course="QTP" 
// 1. Declaration  SyntaxError: Missing initializer in const declaration 
// 2. initialized
console.log(course);
// 3. Reinitialization
// 4. Redeclaration 
// 5.hoisting
// console.log(duration); // Cannot access 'duration' before initialization
// const duration= "2 months"
function getNationality(){//function scope
    // scope is restricted to the function
    
    {// block scope 
        const countryName="india" // local variable
        console.log(course)
    }
    // data leakage? no
    console.log(countryName) // ReferenceError
    
}
getNationality()