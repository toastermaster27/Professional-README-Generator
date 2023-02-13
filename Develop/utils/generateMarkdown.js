// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
[${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `## [License](#table-of-contents) This project is covered under the following license: ${renderLicenseLink(license)}`;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)
  
  ## [Description]

  ${data.description}

  ## [Purpose]

  ${data.why}

  ## [What I Learned]

  ${data.learn}


  ## [Installation]

  ${data.installation}


  ## [Usage]

  ${data.usage}
  
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  
  ## [Tests](#table-of-contents)

  ${data.test}


  ## [Questions](#table-of-contents)

  Contact me:
  [GitHub](https://github.com/${data.toastermaster27})

`;
}

module.exports = generateMarkdown;
