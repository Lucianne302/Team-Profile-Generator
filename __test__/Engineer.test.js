const Engineer = require('../lib/Engineer');

test('create an engineer ', () => {
    const engineer = new Engineer('name', 'id', 'email', 'githubUserName', 'githubURL');
    console.log(engineer);
    //  expect(engineer.name).toEqual(expect.any(String));
    //  expect(engineer.id).toEqual(expect.any(Number));
    //  expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.githubUserName).toEqual(expect.any(String));
    // expect(engineer.getgithubUserName()).toEqual('githubUserName');
     //expect(engineer.getgithubURL()).toBe('githubURL');
    expect(engineer.githubURL).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual('Engineer');
   })