console.log("---------------------------------");
console.log("Day 3 assignments");
console.log("---------------------------------");
var fileOps = require("./readFileSyncFunc");
var fileOps2 = require("./readFileAsyncFunc");
var funcs = require("./day3modules");
console.log("a function with arrOfObj as a parameter, searchSalary; return pos of firstElement which has a particular salary -- arr.findIdex");
var empArr=[
    {empId:101,empName:"Asha",salary:1001,deptId:"D1"},
{empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},
{empId:103,empName:"Karan",salary:2000,deptId:"D2"},
{empId:104,empName:"Kishan",salary:3000,deptId:"D1"},
{empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
{empId:106,empName:"Pran",salary:4000,deptId:"D3"},
{empId:107,empName:"Saurav",salary:3800,deptId:"D3"}];
console.log("List of employees to be processed ::: ");
console.log(empArr);
console.log("The position of first Element of particular Salary = " + funcs.searchEmployee(empArr, "salary", 3500));
console.log("---------------------------------");

console.log("Add an obj at a particular index position");
let emp = {empId:108,empName:"Mathew",salary:7000,deptId:"D5"};
let pos = 5;
console.log("Employee to be added at 5th positioon ");
console.log("Array after added new employee ::");
console.log(funcs.addEmployee(empArr, pos, emp));
console.log("---------------------------------");

console.log("Remove an obj from the arrObj");
console.log("List of employees to be processed ::: ");
console.log(empArr);
let employee = { empId: 106, empName: 'Pran', salary: 4000, deptId: 'D3' };
console.log("Employee to be removed from an array :: ");
console.log(employee);
console.log("Array after removed the employee ::");
console.log(funcs.removeEmployee(empArr, employee));
console.log("---------------------------------");

console.log("Get a particular emp details from arrObj");
console.log("List of employees to be processed ::: ");
console.log(empArr);
let  empId = 103;
console.log("The following employee details going to be get from an array :: ");
console.log("Employee Id = " + empId);
console.log("The employee details will be ::");
console.log(funcs.getEmployeeDetails(empArr, empId));
console.log("---------------------------------");
console.log("Calling synchronous file read & write operation");
fileOps.readAndWriteFileSynchronously();
console.log("---------------------------------");
console.log("Calling Asynchronous file read & write operation");
fileOps2.readAndWriteFileAsynchronously();
console.log("---------------------------------");