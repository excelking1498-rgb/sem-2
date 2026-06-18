let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let empId = document.getElementById("empId").value.trim();
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value.trim();

    if (name === "" || empId === "" || dept === "" || isNaN(salary)) {
        alert("Please fill all fields properly");
        return;
    }

    let employee = {
        name: name,
        empId: empId,
        salary: salary,
        department: dept
    };

    employees.push(employee);

    displayEmployees();

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {

    let output = document.getElementById("output");

    if (employees.length === 0) {
        output.innerHTML = "No Employees Added";
        return;
    }

    let result = "<h3>Employee List</h3>";

    employees.forEach(emp => {
        result += `Name: ${emp.name} | ID: ${emp.empId} | Salary: ${emp.salary} | Department: ${emp.department}<br>`;
    });

    output.innerHTML = result;
}

function fliterSalary() {

    let output = document.getElementById("output");

    let filtered = employees.filter(emp => emp.salary > 500000);

    if (filtered.length === 0) {
        output.innerHTML = "No employee with salary greater than 500000";
        return;
    }

    let result = "<h3>Employees with Salary > 500000</h3>";

    filtered.forEach(emp => {
        result += `Name: ${emp.name} | Salary: ${emp.salary}<br>`;
    });

    output.innerHTML = result;
}

function totalSalary() {

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("output").innerHTML =
        "<h3>Total Salary = " + total + "</h3>";
}

function averageSalary() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No Employees";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "<h3>Average Salary = " + avg + "</h3>";
}

function countDepartment() {

    let deptCount = {};

    employees.forEach(emp => {
        if (deptCount[emp.department]) {
            deptCount[emp.department]++;
        } else {
            deptCount[emp.department] = 1;
        }
    });

    let result = "<h3>Department Count</h3>";

    for (let dept in deptCount) {
        result += dept + " : " + deptCount[dept] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}