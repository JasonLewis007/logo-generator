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
            message: 'Please input up to 3 letters that you would like for your logo.',
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
            message: 'What shape would you like for your logo to be?',
            choices: ["circle", "triangle", "square"],
        },
        {
//user choice text colors
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text to be?  Please type in your color.',
            validate: (input) => {
                if(color){
                    return true;
            }else{
                console.log('Pick another color.');
                return false;
            }
        }},
        {
//user input shape colors
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?  Please type the color.',
            validate: (input) => {
                if(color){
                    return true;
            }else{
                console.log('Pick another color.');
                return false;
            }
        }},

    ])

