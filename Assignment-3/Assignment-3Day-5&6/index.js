//create array
let employees=[
    {
        name: "Saswat", age:25, city:"Banglore", salary:45000,
    },
    {
        name:"Dylan",  age:24,  city:"Mumbai",salary:50000,
    },
    {
        name:"Reema",age:23, city:"Bhubaneswar", salary:45000,
     },
    {
        name:"Yiren", age:26, city:"Banglore",  salary:75000,
    },
    {
        name:"Adil" , age:25,  city:"Delhi", salary:80000,
    },
    {
        name:"Rohan" , age:27,  city:"Delhi", salary:50000,
    },
];
//print table
function display(employees) {
    let tableData = "";
    employees.forEach(function (employee, index) {
      let currentRowData = `<tr>
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.city}</td>
      <td>${employee.salary}</td>
      <td>
      <button id="deleteEmp" onclick='deleteEmployee(${index})'>Delete</button>
      </td>
      </tr>`;
      tableData += currentRowData;
    });
  
    document.getElementsByClassName("tbldata")[0].innerHTML = tableData;
  }
  display(employees);

  //search record
 function searchByNameAndCity(){
    let searchValue = document.getElementById("searchNameAndCity").value;
  let searchNameOrCity = employees.filter(function (employee) {
    return (
      employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 || employee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });
    display(searchNameOrCity);
 }

 //delete record
 function deleteEmployee(index) {
    employees.splice(index, 1);
    display(employees);
  }
  //add details but not permanent
  function addEmployee(e) {
    e.preventDefault();
    let employee = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = Number(salary);
  
    employees.push(employee);
  
    display(employees);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }

