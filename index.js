const inquirer = require('inquirer');
const {Shape, Triangle, Circle, Square} = require('./lib/shapes')
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log('Success!')
    );  
}

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
    console.log('Generated logo.svg');

});