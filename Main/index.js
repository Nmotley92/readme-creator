
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// questions for the users input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project',
        validate: (titleAnswer) => {
            if (titleAnswer) {
                return true;
            } else
                console.log("Please enter a title");
            return false;
        },

    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?',
        validate: (Answer) => {
            if (Answer) {
                return true;
            } else
                console.log("Please enter a description");
            return false;
        },
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?',
        validate: (Answer) => {
            if (Answer) {
                return true;
            } else
                console.log("Please enter how to install your project");
            return false;
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage of project?',
        validate: (Answer) => {
            if (Answer) {
                return true;
            } else
                console.log("Please enter the usage");
            return false;
        },

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?',
        validate: (Answer) => {
            if (Answer) {
                return true;
            } else
                console.log("Please enter how to contribute");
            return false;
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'What commands can be run for tests?',
        validate: (Answer) => {
            if (Answer) {
                return true;
            } else
                console.log("Please enter the tests");
            return false;
        },
    },

    {
        type: 'list',
        choices: ['Apache_2.0', 'MIT', 'Boost_1.0', 'Perl', 'Eclipse_2.0',
            'GNU_2.0', 'Mozilla_Public', 'NONE'
        ],
        name: 'license',
        message: 'Please Choose a License.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username?',
        validate: (Answer) => {
            if (Answer) {
                return true;
            } else
                console.log("Please enter your gitHub username");
            return false;
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email please.',
        validate: (Answer) => {
            if (Answer) {
                return true;
            } else
                console.log("Please enter your email");
            return false;
        },
    },

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Created README.md!')
    )
}

function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", response);
    })
}



// Function call to initialize app
init();