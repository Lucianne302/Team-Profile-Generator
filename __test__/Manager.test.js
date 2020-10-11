const Manager = require('../lib/Manager');

test('create a manager ', () => {
    const manager = new Manager('manager name', 123, 'noemail@gmail.com', 102);
    console.log(manager);
  
     expect(manager.name).toEqual(expect.any(String));
     expect(manager.id).toEqual(expect.any(Number));
     expect(manager.email).toEqual(expect.any(String));
     expect(manager.office).toEqual(expect.any(Number));
   })