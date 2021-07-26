// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const { start } = require('repl');

    //Title of Project - Title of Readme
    //Desctiption
    //Table of Contents (links to each section of readme)
    // Instalation (instructions to install)
    //Usage (how to use)
    //License (Badge is added to )
    //Contributing
    //Tests
    //Questions (Add GitHub Profile User Name in Here for link to profile in Readme),(EMAIL Is in here, request email)

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the Title of your Project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the Title of your project?!');
                    return false;
                }
            }
         },
         {
            type: 'input',
            name: 'description',
            message: 'Please enter a description your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description your project!');
                    return false;
                }
            }
         },
        {
            type: 'input',
            name: 'instalation',
            message: 'Please enter a step-by-step description of how to Install (Required)',
            validate: instalationInput => {
                if (instalationInput) {
                    return true;
                } else {
                    console.log('Please enter a step-by-step description of how to install!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for how to use your project (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'badgetype',
            message: 'Please select License Type (Required)',
            choices: ['Unlicense', 'MIT', 'Mozilla', 'GNU_AGP', 'GNU_GPL', 'Apache'],
            default:['Unlicense','MIT','Mozilla','GNU_AGP','GNU_GPL','Apache']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide Contributing guidelines for how to do so or list NA (Required)',
            validate: contributingInput => {
            if (contributingInput) {
                    return true;
                } else {
                    console.log('Please provide Contributing guidelines for how to do so or list NA!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide instructions for included Tests or list NA (Required)',
            validate: testInput => {
            if (testInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for included Tests or list NA!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub user name (Required)',
            validate: testInput => {
            if (testInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub user name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address (Required)',
            validate: testInput => {
            if (testInput) {
                    return true;
                } else {
                    console.log('Please provide your email address!');
                    return false;
                }
            }
        }

    ]

//License 
    //Unlicense https://spdx.org/licenses/Unlicense.html
    //MIT https://spdx.org/licenses/MIT.html
    //Mozilla https://spdx.org/licenses/MPL-2.0.html
    //GNU_AGP https://spdx.org/licenses/AGPL-3.0-or-later.html
    //GNU_GPL https://choosealicense.com/licenses/gpl-3.0/
    //Apache https://choosealicense.com/licenses/apache-2.0/



//TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFileSync(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("README.md File Created")
    });
};

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then(response => {
        writeToFile('README.md', generateMarkdown(response))   
   
    // .then(answers)
    // .then(function (data){
    //     fs.writeFile(filename, generateMarkdown(data), (err) => {
    //         if (err) {
    //         console.log(err);
    //         }
    //     }
    //)});

    // fs.writeFile("./Test.txt", 'Testing 2!', function (err) {
    //     if (err) return console.log(err);
    //     console.log('Hello World > helloworld.txt');
    //   })
    //   .then(writeToFile(fileName, data))  
    })
};


// Function call to initialize app
init()
