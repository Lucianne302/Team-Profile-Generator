const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee');

console.log(new Employee());

test('create an employee', () => {
    const employee = new Employee('Lucy', 123);
    console.log(employee);
  
     expect(employee.name).toEqual(expect.any(String));
     expect(employee.id).toEqual(expect.any(Number));
     expect(employee.email).toEqual(expect.any(String));
   })