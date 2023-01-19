// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilities/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // Github's Username
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your Github username?',
    },
    // Email Address
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
    },
    // Project's Name / Title
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name?',
    },
    // Short Description / Overview
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
    },
    // License
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?'
    },
    // Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(`Error Happened! ${err}`) : console.log('Successfully created a professional README file!'));
}

// TODO: Create a function to initialize app
function init() {
    const userInputCollections = inquirer.prompt(questions);
    
    userInputCollections.then((data) => {
        const readMeContent = generateMarkdown(data);
        const filePathAndName = './sample/README.md';

        writeToFile(filePathAndName, readMeContent);
    });
}

// Function call to initialize app
init();
