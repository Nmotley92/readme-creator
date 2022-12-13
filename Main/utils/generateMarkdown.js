
// Create a url link for using in the readme
let link;
function createLicenseLinkUrl(license){
  
if(license==="MIT"){
  link='https://mit-license.org/';
}
if(license==="Apache_2.0"){
  link='https://www.apache.org/licenses/LICENSE-2.0.html';
}
if(license==='Boost_1.0'){
  link='https://www.boost.org/users/license.html';
}
if(license==='Perl'){
  link='https://dev.perl.org/licenses/';
}
if(license==='Eclipse_2.0'){
  link='https://www.eclipse.org/legal/epl-2.0/';
}
if(license==='GNU_2.0'){
  link='https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html';
}
if(license==='Mozilla_Public'){
  link='https://www.mozilla.org/en-US/MPL/2.0/';
}
}
// rrenders the licenseBadge
function renderLicenseBadge(license) {
  
  if (license!=="NONE") {
    return `[![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)](${link})`;
  }
  return '';
}

//  Creates link for TOC
function renderLicenseLink(license) {
  if(license!=='NONE'){return `[License](#license)`}
  return '';
}

// creates the license section
function renderLicenseSection(license) {
  
  if(license!=='NONE'){return `##License\n
  This product is licensed under- <a href="${link}">${license}</a>`}
  return '';
}

//  cretes the markdown for the readme
function generateMarkdown(data) {
  createLicenseLinkUrl(data.license);

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- ${renderLicenseLink(data.license)}


## Installation
${data.install}

## Usage 
${data.usage}

## Contributions

${data.contributing}
  
## Tests

${data.test}

${renderLicenseSection(data.license)}

## Questions 

If you have any questions please contact me\n

Github: [${data.github}](https://github.com/${data.github})\n

Email: ${data.email}

`;
}

module.exports = generateMarkdown;