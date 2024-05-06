const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Please input 3 characters.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Pick a color for your text.',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'Select a shape',
        name: 'shape',
        choices: ['triangle', 'circle', 'square'],
    },
    {
        type: 'input',
        message: 'Pick a color for your shape.',
        name: 'shapecolor',
    },
])
.then((data) => {


});