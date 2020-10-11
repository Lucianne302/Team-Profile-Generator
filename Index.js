const math = require('math');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./src/generateMarkup');
const generatePage = require('./src/generateMarkup');
const fs = require('fs');

const Manager = require("./lib/Manager");
const Engineer  = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// configurable vars:
const fName="Index";
const pTitle="My Team";
const teamArray = [];

function is_Numeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const promptUser = teamData => {
    if (!teamData) {
        teamData = [];
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
            type: 'list',
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

        if (empData.role === "Manager") {
            const manager = new Manager(empData.name, empData.id, empData.email, empData.office)
            teamData.push(manager)
        }else if (empData.role === "Engineer"){
            const engineer = new Engineer(empData.name, empData.id, empData.email, empData.githubUserName, empData.githubURL)
            teamData.push(engineer)
        } else if (empData.role === "Intern"){
            const intern = new Intern(empData.name, empData.id, empData.email, empData.school)
            teamData.push(intern)
        } if(empData.confirmAddEmp) {
            return promptUser(teamData)
        }
        return teamData;
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
        .then(teamData=>{
            return Promise.resolve([teamData,generatePage(teamData)]);
        })
        .then(teamData=>{writeToFile(fName,teamData)})
        .catch(err => {writeFile
            console.log(err);
        });
}

// function call to initialize program
init();
