//Array for employees
// Get a reference to the #add-employees-btn element
// Selecting the ID attribute in HTML

const employeesArray = [];
const addEmployeesBtn = document.querySelector("#add-employees-btn");
let isAskingForEmployees = true;

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  while (isAskingForEmployees) {
    const inputFirstName = prompt("Please enter your employee's First Name");
    const inputLastName = prompt("Please enter your employee's Last Name");
    const inputSalary = parseInt(
      prompt("Please enter your employee's Annual Salary")
    );

    employeesArray.push({
      firstName: inputFirstName,
      lastName: inputLastName,
      salary: inputSalary,
    });

    isAskingForEmployees = confirm("Would you like to add another employee?");
  }
  return employeesArray;
};