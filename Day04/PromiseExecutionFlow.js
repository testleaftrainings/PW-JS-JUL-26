console.log('Start');
 
const promise = new Promise((resolve) => {
  console.log('Inside Promise');
  resolve('Resolved'); //---> call back  registered
});
 
promise.then((res) => console.log(res));
 
console.log('End');

/*
Print's the output :  in Execution Order

Start
Inside Promise
End
Resolved
*/

function verifyLogin(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Authenticating...");
        setTimeout(() => {
            if (username === "demosalesmanager" && password === "crmsfa") {
                resolve("Login Successful");
            } else {
                reject("Invalid Credentials");
            }
        }, 2000);
    });
}

verifyLogin("demosalesmanager", "crmsfa")
    .then(result => console.log(result))
    .catch(error => console.log(error));