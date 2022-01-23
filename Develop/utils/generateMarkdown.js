// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return`![Apache](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }else if (license==='ISC'){
    return '![ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
  }else if (license ==='IBM'){
    return '![IBM](https://img.shields.io/badge/License-IPL_1.0-blue.svg)'
  }else if(license ==='Mozilla'){
    return '![Mozilla](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.username}/${data.title}
  #Description
  ${data.Description}
  #Table of Content:
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features]](#features)
* [Contributor](#Contributor)
* [Test](#test)
* [Author](#author)
  #Installation
  The step will need for the installation in order to run this application:${data.installation}
  #Usage
  Here is the example and the instruction, ${data.Usage}
  #License
  Licensed under the [${data.license}](https://img.shields.io/badge/license-${data.license}-blue.svg) license.
  #Feature
  The Feature will be ${data.feature}
  #Contributors
  Contributor:${data.Contributing}
  #Test
  command line: ${data.test}
  #Author
  - ${data.username}
  - ${data.Email}
  `;
}

module.exports = generateMarkdown;
