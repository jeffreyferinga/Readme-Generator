// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const readmegenerate = ({Name, description, howtoinstall, usage, license, contribute, test, github, email, deployed}) =>
`#Title:  **${Name}**
[![License](https://img.shields.io/badge/License-${license}-green)](https://opensource.org/licenses/${license})

## *Description*
${description}

## *Table of Contents*
* [Description](#description)
* [How To Install](#installation)
* [Usage](#usage)
* [License](#license)
* [How to Contribute](#contributors)
* [Tests](#tests)
* [Github](#github)

## Installation
${howtoinstall}


## Usage
${usage}

## License

${license}


## Contributors

${contribute}

## Tests

${test}

## Github

Github: https://github.com/${github}<br>
Deployed:  [Deployed](${deployed})<br>
Email me at: ${email}
`;
// TODO: Create a function to write README file
inquirer
.prompt([
   {
            type: `input`,
            message: `What's your project called?`,
            name: `Name`,
        },
        {
            type: `input`,
            message: `Type in a quick description of your project`,
            name: `description`,
        },
        {
            type: `input`,
            message: `How do you install your project?`,
            name: `howtoinstall`,
        },
        {
            type: `input`,
            message: `What is your project used for?`,
            name: `usage`,
        },
        {
            type: `list`,
            message: `Which license are you using for your project?`,
            name: `license`,
            choices: [
                "MIT",
                "Mozzila",
                "Open"
            ]

        },
        {
            type: `input`,
            message: `Name who contributed to your project`,
            name: `contribute`,
        },
        {
            type: `input`,
            message: `How did you test your project?`,
            name: `test`,
        },
        {
            type: `input`,
            message: `What's your github username`,
            name: `github`,
        },
        {
            type: `input`,
            message: `Type in your deployed applications link (must be a hyperlink)`,
            name: `deployed`,
        },
        {
            type: `input`,
            message: `Type in your email address`,
            name: `email`,
        }



    ])

.then((answers) =>{
    const Info = readmegenerate(answers);
    fs.writeFile("ReadMe.md", Info, (err)=>
    err ? console.log(err) : console.log("Readme Generated Successfully!"))
}) 

