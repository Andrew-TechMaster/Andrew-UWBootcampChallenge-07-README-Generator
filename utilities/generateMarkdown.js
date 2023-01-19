const checkIsNone = (license) => { if (license === 'None') { return '' } }

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  checkIsNone();

  const licenseStringNoSpace = license.split(" ").join("");

  return `[![License](https://img.shields.io/badge/license-${licenseStringNoSpace}-blue.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  checkIsNone();

  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'APACHE 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'GPL 3.0':
      return `https://www.gnu.org/licenses/gpl-3.0.html`;
    case 'BSD 3':
      return `https://opensource.org/licenses/BSD-3-Clause`;
    default:
      return `https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `There is no license chosen in this project.`
  }

  return `The project is licensed under the ${license} License`;
}

// TODO: Create a function to generate markdown for README
// Destructuring Assignment: const { a, b } = obj;
function generateMarkdown({ projectName, license, description, installation, usage, contributing, tests, emailAddress, githubUsername }) {

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSectionContent = renderLicenseSection(license);

  return `
# ${projectName}
${licenseBadge}(${licenseLink})

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
${licenseSectionContent}

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

module.exports = generateMarkdown;
