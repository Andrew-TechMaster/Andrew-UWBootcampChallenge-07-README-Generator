const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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
            type: 'checkbox',
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
    ])
    .then((data) => {
        console.log(data)
        // const htmlPageContent = generateHTML(answers);

        // fs.writeFile('index.html', htmlPageContent, (err) =>
        //     err ? console.log(err) : console.log('Successfully created index.html!')
        // );
    });