const Engineer = require('../lib/Engineer');

test('create an engineer ', () => {
    const engineer = new Engineer('engineer name', 123, 'noemail@gmail.com', 'githubUserName', 'githubURL');
    console.log(engineer);
  
     expect(engineer.name).toEqual(expect.any(String));
     expect(engineer.id).toEqual(expect.any(Number));
     expect(engineer.email).toEqual(expect.any(String));
     expect(engineer.githubUserName).toEqual(expect.any(String));
     expect(engineer.githubURL).toEqual(expect.any(String));
   })