const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./lib/circle');
const triangle = require('./lib/triangle');
const square = require('./lib/square');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please choose 3 characters',
        validate: function (input) {
            if (input.length === 3) {
                return true;
            } else {
                return "Please enter a total of three characters";
            }
        },
    },

    {
        type: 'input',
        name: 'fontColor',
        message: 'Please enter a color, a keyword or hexadecimal number, for the text color',
    },

    {
        type: 'list',
        name: 'shapes',
        message: 'What shape do you want your logo to be?',
    },

    {
        type: 'input',
        name: 'logoColor',
        message: 'Please enter a color, a key word or hexadecimal number, for the text color',
    },

]
