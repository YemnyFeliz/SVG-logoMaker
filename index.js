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
        name: 'shape',
        choices: [
            'circle',
            'square',
            'triangle',
        ],
        message: 'What shape do you want your logo to be?',
    },

    {
        type: 'input',
        name: 'logoColor',
        message: 'Please enter a color, a key word or hexadecimal number, for the logo color',
    },

];

const writeToFile = async (fileName, data) => {
    await fs.promises.writeFile(fileName, data, (err) =>
        console.error("Error: ", err)
    );
};

//renders a function (new circle, new square, new triangle, based on shape data input by user)
const svgGenerator = (data) => {
    let logoMaker;

    switch (data.shape) {

        case 'circle':
            logoMaker = new circle(data.text, data.fontColor, data.logoColor);
            break;

        case 'square':
            logoMaker = new square(data.text, data.fontColor, data.logoColor);
            break;

        case 'triangle':
            logoMaker = new triangle(data.text, data.fontColor, data.logoColor);
            break;

    }
    return logoMaker


}

//shape data is stored in newLogo and svg is created using writeToFile function
const init = () => {
    inquirer
        .prompt(questions)
        .then((data) => {
            let newLogo = svgGenerator(data);
            newLogo.render();
            //console.log(newLogo);

            console.log('SVG logo has been generated!');
            writeToFile('Logo.svg', newLogo.render());

        })
        .catch((err) => console.error(err));
};
init();

