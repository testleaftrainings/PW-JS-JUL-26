// literal
let companyName="  Testleaf" // 90% --> 
console.log(typeof companyName) //string
// instansiation --> Object
let objCompanyName =new String("Testleaf")
console.log(typeof objCompanyName) // object
// objCompanyName===companyName --> false
if(objCompanyName.includes(companyName)){
console.log("both the values are same");
}else{
console.log("not same");
}
console.log(companyName.length)
console.log(companyName.indexOf("e"));
let normalized =companyName.trim().toLowerCase() 
console.log(normalized.length,normalized)  
console.log(normalized.charAt(7))
console.log(normalized.slice(-3))
console.log(normalized.substring(-3))
let statement="Testleaf has the best user rating as 4.8 in google"
let splittedStatement =statement.split(' ')
splittedStatement.splice(7,1,"4.9")
console.log(splittedStatement);
let formattedValue =splittedStatement.join(" ")
console.log(formattedValue);
console.log(formattedValue.replace("user","google"));