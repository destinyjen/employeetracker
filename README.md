# employeetracker

* This Employee Tracker Application allows any Payroll Manager to view and manage employee payroll data. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

displayAverageSalary:

* This function will take in the generated array of employees and log the average salary and number of employees to the console. A template literal string for this task.

getRandomEmployee: 

* This function will take in the generated array of employees, randomly select one employee, and use a template literal to log their full name to the console. The built in Math object can help with random number generation: [MDN Web Docs on Math.randomLinks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

displayEmployees: 

* This function will take in an array of employees and render each employee to an HTML table.

trackEmployeeData: 

* This function will execute when the "Add Employees" button is clicked. It will take the array generated in your collectEmployees function, sort the employees by last name, and place them on a table on the page using the provided displayEmployees function. Additionally, the function will execute the displayAverageSalary function to log the average employee salary to the console, and execute the getRandomEmployee function to log a random employees information to the console.
