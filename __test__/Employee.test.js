const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee');

test.only('create an employee', () => {
    const employee = new Employee('employee name', 'employee id', 'employee email', 'role');
    console.log(employee);
  
     expect(employee.name).toEqual(expect.any(String));
     expect(employee.id).toEqual(expect.any(Number));
     expect(employee.email).toEqual(expect.any(String));
     expect(employee.role).toEqual('Employee');
   })