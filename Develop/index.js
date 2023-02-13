// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Make sure to enter a title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your project does. (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please provide a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project (Required)',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please explain why you created this project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation of your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide instructions on how to install your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can this project be used?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please explain how your project can be used.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn while creating this project?',
        validate: learnInput => {
            if (learnInput) {
                return true;
            } else {
                console.log('Please enter wht you learned during this project.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'licensing',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'lgpl', 'osl-3.0', 'No license']
    },
    {
        type: 'confirm',
        name: 'contributers confirmation',
        message: 'Are other developers allowed to contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions on how to test your project.',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You are required to provide testing instructions.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./genRead/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File has been created.'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}
// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})

