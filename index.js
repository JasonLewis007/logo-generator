//declare constant variables
const fs = require("fs");
const inquirer = require("inquirer");
const color = require("color");
const {createShape} = require("create");
const {generateSVG} = require("generateSVG");
//inquirer prompts
inquirer
//user choice logo letters
    .prompt([
        {
            type: 'input',
            name: 'logoLetters',
            message: 'Please enter up to 3 characters for you logo',
            validate: (input) => {
                if(input.length > 0 && input.length <= 3){
                    return true;
                }else{
                    console.log('Please input atleast 3 characters');
                    return false;
            };
        }},
        {
//user choice shapes
            type: 'list',
            name: 'shapes',
            message: 'Please choose a shape for your logo.',
            choices: ["circle", "triangle", "square"],
        },
