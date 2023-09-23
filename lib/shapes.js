//This class serves as a template to pass input data to the classes of circle, square, and triangle.

class shape {
    constructor(text, fontColor, logoColor) {
        this.text = text;
        this.fontColor = fontColor;
        this.logoColor = logoColor;
    }
};

module.exports = shape;