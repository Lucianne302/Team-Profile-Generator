const Intern = require('../lib/Intern');

test('create an intern ', () => {
    const intern = new Intern('name', 100, 'email', 'school');
    console.log(intern);
  
    //  expect(intern.name).toEqual(expect.any(String));
    //  expect(intern.id).toEqual(expect.any(Number));
    //  expect(intern.email).toEqual(expect.any(String));
     expect(intern.school).toEqual(expect.any(String));
     expect(intern.getRole()).toEqual('Intern');

   })