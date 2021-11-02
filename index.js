const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Inter');

const promptManager = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate:  nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
            validate:  idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid Email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the office number?",
            validate: officeInput => {
                if (officeInput){
                    return true;
                } else {
                    console.log("Please enter the manager's office number!")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: "What type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add anymore members."]
        }
    ])
        .then(managerData => {
            const managerInput = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
            teamData.push(managerInput);

            if(managerData.addMember === 'Engineer'){
                return promptEngineer(teamData);
            } else if(managerData.addMember === 'Intern'){
                return promptIntern(teamData);
            } else {
                return teamData;
            }
        });
};

const promptEngineer = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the engineer?",
            validate:  nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID number?",
            validate:  idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid Email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub account.",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please enter the enginner's GitHub!")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: "What type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add anymore members."]
        }
    ])
    .then(engineerData => {
        const engineerInput = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        teamData.push(engineerInput);

        if (engineerData.addMember === 'Engineer'){
            return promptEngineer(teamData);
        } else if (engineerData.addMember === 'Intern'){
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    }) ;
};

const promptIntern = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the intern?",
            validate:  nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID number?",
            validate:  idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid Email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: "What type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add anymore members."]
        }
    ])
    .then(internData => {
        const internInput = new Intern(internData.name, internData.id, internData.email, internData.school);
        teamData.push(internInput);

        if (internData.addMember === 'Engineer'){
            return promptEngineer(teamData);
        } else if (internData.addMember === 'Intern'){
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
};

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

teamData = [];

promptManager(teamData)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeToFile('./dist/index.html', pageHTML);
    })
    .then(writeFileResponse => {
        return copyFile();
    })
    .catch(err => {
        console.log(err);
    });