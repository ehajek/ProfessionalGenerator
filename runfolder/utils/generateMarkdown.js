// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data) {
//   if (data.licenseType) {
//     return true;
//   } else {
//     return "";
//   }
// };

const renderLicenseBadge = () => {
  if (data.license) return data.licenseType
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const licenstInfo = [
  {
    Type: "Unlicense",
    Link: "https://spdx.org/licenses/Unlicense.html"
  },
  {
    Type: "MIT",
    Link: "https://spdx.org/licenses/MIT.html"
  },
  {
    Type: "Mozilla",
    Link: "https://spdx.org/licenses/MPL-2.0.html"
  },
  {
    Type: "GNU_AGP",
    Link: "https://spdx.org/licenses/AGPL-3.0-or-later.html"
  },
  {
    Type: "GNU_GPL",
    Link: "https://choosealicense.com/licenses/gpl-3.0/"
  },
  {
    Type: "Apache",
    Link: "https://choosealicense.com/licenses/apache-2.0/"
  }
]

/////FIX 
// const renderLicenseLink = () => {
//   licenstInfo.filter(licenstInfo => licenstInfo.Type === renderLicenseBadge)
//   return licenstInfo.Link
// };
// console.log(renderLicenseLink);


    //![alt text](http://url/to/img.png)
    //https://img.shields.io/badge/license-MIT-orange

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ## Table of Contents 
   1. [Licensing](#Licensing)
   2. [Desctiption](#Desctiption)
   3. [Instalation](#Instalation) 
   4. [Contributing](#Contributing)
   5. [Test](#Test)
   6. [Questions](#Questions)

  ## Licensing 
  ![${data.badgetype}](https://img.shields.io/badge/license-${data.badgetype}-orange)

  ## Desctiption
  ${data.description}

  ## Instalation
  ${data.instalation}

  ## Contributing
  ${data.usage}

  ## Tests
  ${data.test}

  ## Questions
  Contact via email at ${data.email}
  GitHub User: https://github.com/${data.github}
 
  `;

}

module.exports = generateMarkdown;
