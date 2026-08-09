var TestleafHRM = /** @class */ (function () {
    function TestleafHRM(name, id) {
        console.log("Contructor is invoked immediately, Once after creation of Object");
        this.employeeName = name; // intialization will happen at runtime
        this.employeeId = id;
    }
    TestleafHRM.prototype.fetchEmployeeDetails = function () {
        // Local variable  
        // this keyword--> reference the current class instance or property
        console.log("The employee name is ".concat(this.employeeName, ", Employee Id is ").concat(this.employeeId));
    };
    return TestleafHRM;
}());
// object[instance of the class]
// constructor is a special method, it has the same name as the class
// benifit : It act as the instance member(gloabl variable) initializer
// syntax : new ClassName()
// constructor TestleafHRM(): TestleafHRM
var obj = new TestleafHRM("Bhuvanesh", 1882); // obj --> ajoie9373dbhah@48!hjidj
console.log(obj.employeeName);
obj.fetchEmployeeDetails();
var obj2 = new TestleafHRM("Vinoth", 1263); // obj --> ueevslecf!746#)k03;
console.log(obj2.employeeName);
obj2.fetchEmployeeDetails();
