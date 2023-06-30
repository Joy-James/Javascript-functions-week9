// //Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function invokeDelay(callback) {
    setTimeout(callback, 2000);
    
}
function display_message() {
    console.log('heey Mumbi')
}
invokeDelay(display_message)

// //Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
//Include a method to calculate annual salary.
// Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
      console.log(`Employee:${name}`)
     console.log(`Salary:${salary}`)
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const baseSalary = super.calculateAnnualSalary();
      const bonus = 0.1;
        return(bonus*baseSalary) + baseSalary
    }
  }
  
 
  const manager1 = new Manager('Joy Njuguna', 60000, 'Sales');
    const annualSalary1 = manager1.calculateAnnualSalary();

  const manager2 = new Manager('George Kanja', 70000, 'Marketing');
  const annualSalary2 = manager2.calculateAnnualSalary();
  
  console.log(`${manager1.name}'s annual salary: $${annualSalary1}`);
  console.log(`${manager2.name}'s annual salary: $${annualSalary2}`);

  //Write a JavaScript program to find the leap years in a given range of years.
  function leap_year_range(start_year, end_year) {
    let year_range = [];
    for (let i = start_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    let  new_array = [];

year_range.forEach(
function(year)
{ 
   if (test_LeapYear(year)) 
   new_array.push(year);
});

return new_array;
 }

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year_range(2000,2012));

//Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

const arr = [2, "11", 3, "a2", false, 5, 7, 1];
let sum = 0;
for (const value of arr) {
  if (typeof value === 'number') {
    sum += value;
  }
}

console.log( 'The sum of the numbers is:'+ sum); 

  