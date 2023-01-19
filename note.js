const inquirer = require('inquirer');
const fs = require('fs');

// Destructuring Assignment: const { a, b } = obj;
const generateREADME = ({ projectName, license, description, installation, usage, contributing, tests, emailAddress, githubUsername }) => {

    const licenseStringNoSpace = license.split(" ").join("");
    // const licenseStringUnderScore = license.split(" ").join("_");
    // [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    // [![License](https://img.shields.io/badge/License-${licenseStringNoSpace}lightblue.svg)](https://www.boost.org/${licenseStringUnderScore}.txt)

    return `
# ${projectName}
![Github License](https://img.shields.io/badge/license-${licenseStringNoSpace}-blue.svg)

## Description
${description}

## Table Of Contents
 >* [Installation](#installtion)
 >* [Usage](#usage)
 >* [License](#license)
 >* [Contributing](#contributing)
 >* [Tests](#tests)
 >* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

## License
The project is licensed under the ${license} License

## Contributing
${contributing}

## Tests
To run tests, run the following command:
\`\`\`
${tests}
\`\`\`

## Questions
If you have any question about the repo, open an issue or contact me directly at ${emailAddress}. You can find more of my work at [${githubUsername}](https://github.com/${githubUsername}?tab=repositories).
`;
}


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
    ])
    .then((data) => {
        // console.log(data);
        const readMeContent = generateREADME(data);

        // set path to the sample file, so the generated readme file will inside the sample folder
        fs.writeFile('./sample/README.md', readMeContent, (err) => err ? console.log(`Error Happened! ${err}`) : console.log('Successfully created a professional README file!'));
    });

