const Employee = require('../lib/Employee.js');

test('create an employee', () => {
    const employee = new Employee('employee name', 123);
    console.log(employee);
  
     expect(employee.name).toBe('employee name');
     expect(employee.id).toEqual(expect.any(Number));
     expect(employee.email).toStrictEqual(expect.any.String);
   })