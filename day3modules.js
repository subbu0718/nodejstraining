function searchEmployee(empArr, fieldName, value){
    // return empArr.findIndex((value, i, empArr)=>true, i, -1);
    // return empArr.findIndex((fieldName) => fieldName = value);
    for (let i=0; i<empArr.length;i++){
        if (empArr[i][fieldName] == value){
            return i;
            break;
        }
    }
}

function addEmployee(empArr, pos, emp) {
    let newArr = [];
    let newArrPos = 0;
    for (let i=0; i<empArr.length; i++) {
        if (i == pos) {
            newArr[newArrPos] = emp;
            newArr[++newArrPos] = empArr[i];
        } else {
            newArr[newArrPos] = empArr[i];
        }
        newArrPos++;
    }
    return newArr;
}

function removeEmployee(empArr, emp) {
    let newArr = [];
    let newArrPos = 0;
    for (let i=0; i<empArr.length; i++) {
        if (empArr[i].empId != emp.empId) {
            newArr[newArrPos] = empArr[i];
            newArrPos++;
        }
    }
    return newArr;
}

function getEmployeeDetails(empArr, empId){
    let employee = "";
    for (let i=0; i<empArr.length; i++) {
        if (empArr[i].empId == empId){
            employee = empArr[i];
            return employee;
        }
    }
}

module.exports={
    searchEmployee, addEmployee, removeEmployee, getEmployeeDetails
}