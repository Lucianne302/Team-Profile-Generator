const math = require('math');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./src/generateMarkup');
const generatePage = require('./src/generateMarkup');
const fs = require('fs');

// configurable vars:
const fName="Index";
const pTitle="My Team";

function is_Numeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const promptUser = teamData => {
    if (!teamData.members) {
        teamData.members = [];
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
              if (nameInput){
                return true; 
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is your id? (Required)',
            validate: idInput => {
              if (idInput){
                  if (is_Numeric(idInput)){
                    return true; 
                  } else {
                    console.log('\nPlease enter a numeric value!');
                    return false;                      
                  }
              } else {
                console.log('Please enter your ID!');
                return false;
              }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email: ',
            validate: emailInput => {
                if (emailInput){
                return true; 
                } else {
                console.log('Please enter your email!');
                return false;
                }
            }
        },
        
        {
            type: 'checkbox',
            name: 'role',
            message: 'What is your role? (Check one, please)',
            choices: ['Employee', 'Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'office',
            message: 'what is your office number?',
            when: ({ role }) => {
                if (role=='Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },  
        {
            type: 'input',
            name: 'githubUserName',
            message: 'Enter your Github Username: ',
            when: ({ role }) => {
                if (role=='Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: githubInput => {
                if (githubInput){
                    return true; 
                } else {
                    console.log('Please enter your Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubURL',
            message: 'Enter the GitHub link to your project. (Required)',
            when: ({ role }) => {
                if (role=='Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: linkInput => {
                if (linkInput){
                    return true; 
                } else {
                    console.log('Please enter your GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'what is the name of your school?',
            when: ({ role }) => {
                if (role=='Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmp',
            message: 'Would you like to enter another employee?',
            default: false
        }

    ]).then(empData => {
        teamData.members.push(empData);
        if (empData.confirmAddProject) {
          return promptUser(teamData);
        } else {
          return teamData;
        }
    });
};

function writeToFile(fileName,data) {
        //data=mockData; // testing only

        fs.writeFile('dist/'+fileName+'.html', data, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('HTML created! Check out '+fileName+' in the Dist directory to see it!');
        }
    )
};

// function to initialize program
function init() {
    promptUser()
        .then(data=>{
            return Promise.resolve([data,generatePage(pTitle,data)]);
        })
        .then(data=>{writeToFile(fName,data[1])})
        .catch(err => {writeFile
            console.log(err);
        });
}

// function call to initialize program
init();

 //const promptProject = employeeData => {
//    if (!employeeData.projects) {
//         employeeData.projects = [];
//     }
// //     console.log(`================= Add a New Employee =================`);
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the name of your project?',
//             validate: projectInput => {
//               if (projectInput){
//                 return true; 
//               } else {
//                 console.log('Please enter your project name!');
//                 return false;
//               }
//             }
//           },
//           {
//             type: 'input',
//             name: 'description',
//             message: 'Provide a description of the project (Required)',
//             validate: projectDescriptionInput => {
//               if (projectDescriptionInput){
//                 return true; 
//               } else {
//                 console.log('Please enter your project description!');
//                 return false;
//               }
//             }
//           },
//           {
//             type: 'checkbox',
//             name: 'languages',
//             message: 'What did you build this project with? (Check all that apply)',
//             choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//           },
//           {
//             type: 'input',
//             name: 'link',
//             message: 'Enter the GitHub link to your project. (Required)',
//             validate: linkInput => {
//               if (linkInput){
//                 return true; 
//               } else {
//                 console.log('Please enter your GitHub link!');
//                 return false;
//               }
//             }
//           },
//           {
//             type: 'confirm',
//             name: 'feature',
//             message: 'Would you like to feature this project?',
//             default: false
//           },
//           {
//             type: 'confirm',
//             name: 'confirmAddProject',
//             message: 'Would you like to enter another project?',
//             default: false
//           }  
            
//     ])
//     .then(projectData => {
//       employeeData.projects.push(projectData);
//       if (projectData.confirmAddProject) {
//         return promptProject(employeeData);
//       } else {
//         return employeeData;
//       }
//     })
// };

// const promptUser = () => {
//     return inquirer.prompt([
//         {
//         type: 'checkbox',
//         name: 'role',
//         message: 'What is your role? (Check one, please)',
//         choices: ['Employee', 'Manager', 'Engineer', 'Intern']
//         },
//         {
            
//         }




//         
//         {
//             type: 'input',
//             name: 'github',
//             message: 'Enter your Github Username',
//             validate: githubInput => {
//               if (githubInput){
//                 return true; 
//               } else {
//                 console.log('Please enter your Username!');
//                 return false;
//               }
//             }
//         },
//         {
//           type: 'input',
//           name: 'about',
//           message: 'Provide some information about yourself:',
//           when: ({ confirmAbout }) => {
//             if (confirmAbout) {
//               return true;
//             } else {
//               return false;
//             }
//           }
//         }
//     ]);
// };

//  const mockData = {
//    name: 'Lucianne',
//    github: 'Lucianne302',
//    projects: []
//  }

// const pageHTML = generatePage(mockData);
 
//  promptUser()
//    .then(promptProject)
//    .then(employeeData => {

//     return generatePage(employeeData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });