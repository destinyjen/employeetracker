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
// Display the average salary - You should use a template literal string for this task.
// TODO: Calculate and display the average salary
const displayAverageSalary = function (employeesArray) {
    let sumSalary = 0;
    let averageSalary = 0;
  
    for (let employee of employeesArray) {
      sumSalary += employee.salary;
    }
    averageSalary = sumSalary / employeesArray.length;
    // or console.log("Average Salary: " + averageSalary);
    console.log(
      `The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`
    );
  };
  // Select a random employee - The built in Math object can help with random number generation:
  const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(
      `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
    );
  };
