// const cardSection = data => {
//   if (!data) {
//     return '';
//   }
//   console.log('test: '+data[0].name);
//   console.log(data.length);

const Manager = require("../lib/Manager");

// try a filter
//  each role we'll need soecific html(engineer.getName, eng.getemail, etc. )
// .filter based on getRole(
//   Arraywith jsut engineers, managers
//   .map ()
//   anotherarray.join () into another array 
//    anotherarray into an HTML for a card
// )


// function to generate markup for HTML
function generateMarkup(userData) {

  function createManager(manager) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h6 class="card-title mb-2 text-muted">${manager.getName()}</h6>
              <p class="card-text"> 
                Role: ${manager.getRole()}<br>
                ID: ${manager.getId()}<br>
                Email: ${manager.getEmail()}<br>
                Office #: ${manager.getOffice()}<br>
              </p>
            </div>
        </div>
    `
    }

    function createEngineer(engineer) {
      return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h6 class="card-title mb-2 text-muted">${engineer.getName()}</h6>
              <p class="card-text"> 
                Role: ${engineer.getRole()}<br>
                ID: ${engineer.getId()}<br>
                Email: ${engineer.getEmail()}<br>
                GitHub: <a href = "${engineer.githubURL}" target= "_blank">${engineer.githubUserName}</a>
                <br>
              </p>
            </div>
        </div>
      `
      }

      function createIntern(intern) {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h6 class="card-title mb-2 text-muted">${intern.getName()}</h6>
              <p class="card-text"> 
                Role: ${intern.getRole()}<br>
                ID: ${intern.getId()}<br>
                Email: ${intern.getEmail()}<br>
                School: ${intern.getSchool()}<br>
              </p>
            </div>
        </div>
        `
        }

      const teamArray = [];
      console.log(userData);
      teamArray.push(userData.filter(employee=>employee.getRole() === 'Manager').map(manager => createManager(manager)).join(""))
      teamArray.push(userData.filter(employee=>employee.getRole() === 'Engineer').map(engineer => createEngineer(engineer)).join(""))
      teamArray.push(userData.filter(employee=>employee.getRole() === 'Intern').map(intern => createIntern(intern)).join(""))
      
      return teamArray.join("");

    // this will create three variables based on data in templateData
    //const { licenses, ...myData } = data;


      }

module.exports =teamArray => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">

    ${generateMarkup(teamArray)}
  
  
    </main>
    </body>
  </html>
  
  
  `;
};