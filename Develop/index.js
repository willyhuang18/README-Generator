// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message:'What is the project title?',
    name:'title'
},{
    type:'input',
    message:'What is your description about your project? ',
    name: 'Description'
},{
    type:'input',
    message:'Give me a Table of Content if your README will be long: ',
    name: 'Table of Contents'
},{
    type:'input',
    message:'What is your Installation about your project? ',
    name: 'Installation'
},{
    type:'input',
    message:'Please describe how is the app used:  ',
    name: 'Usage'
},{
    type:'input',
    message:'Please name the collaborators in this project if you have any:  ',
    name: 'Credits'
},{
    type:'input',
    message:'What is license you had use?(for example: MIT)',
    name: 'License'
},{
    type:'input',
    message:'Do you want Badges?',
    name: 'Badges'
},{
    type:'input',
    message:'What are the Features in the projects?',
    name: 'Features'
},{
    type:'input',
    message:'Who is the Contributor for this project? ',
    name: 'Contributing'
},{
    type:'input',
    message:'What command is needed to run this application?',
    name: 'Tests'
}];
console.log(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
