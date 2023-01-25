// Function 1 :  Create a function which returns the squares of all the elements without using the map method
var elements=[100,400,900,1600,2500];
var squaredElements=[];

function findSquaredElements(elements) {
    for (let i=0;i<elements.length;i++){
        squaredElements[i] = elements[i] * elements[i];
    }
    return squaredElements;
}

var result = findSquaredElements(elements);
console.log("----------------------------------------")
console.log("Squaring an array elements function")
console.log(`Input array elements [ ${elements} ]`);
console.log(`Squared array elements [ ${result} ]`);
console.log("----------------------------------------")

// Create a function which takes in a string which holds a phoneNumber and returns the masked version
var phoneNumber = "9443173229597988866";
console.log(`Before masking the phone number ${phoneNumber}`);
function createMaskOnPhoneNumber(phoneNumber1){
    var firstSet = phoneNumber1.substring(0, 3);
    var lastSet = phoneNumber1.substring(phoneNumber1.length - 3);
    var maskSet = phoneNumber1.substring(3, phoneNumber1.length - 3);
    var maskChars = maskSet.replace(/\d/g, "*");
    var maskedPhoneNumber = firstSet + maskChars + lastSet;
    return maskedPhoneNumber;
}
console.log(createMaskOnPhoneNumber(phoneNumber));
console.log("----------------------------------------")

//Create a function which takes in array of objects and returns the obj which has the highest salary
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

function getHighestSalariedEmployee(empArr2) {
    let empSorted = empArr2.sort((empObj1, empObj2) => (empObj1.salary < empObj2.salary) ? 1 : (empObj1.salary > empObj2.salary) ? -1 : 0);
    return empSorted;
}

var result =  getHighestSalariedEmployee(empArr);
console.log("Employee which has the highest Salary :::: ");
console.log(result[0]);
console.log("----------------------------------------")
