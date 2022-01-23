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
    name: 'Contents'
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
    type: 'checkbox',
    name: 'license',
    message:'What is license you had use?(for example: MIT)',
    choices: ['MIT', 'ISC', 'IBM', 'Mozilla',]
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
},{
    type:'input',
    message:'What is your github username?',
    name: 'username'
},{
    type:'input',
    message:'What is you Email?',
    name: 'Email'
}];
console.log(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //give err function check for the err
    fs.writeFile(fileName, data, function(err){
        console.log(fileName);
        console.log(data);
        if(err){
            return console.log(err);
        }else{
            return console.log("complete!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
