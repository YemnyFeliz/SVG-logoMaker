const shape = require('./shapes');

class square extends shape {
    constructor(text, fontColor, logoColor) {
        super(text, fontColor, logoColor);
    };
    render() {
        return `<svg width="300" height="200" viewBox="0 0 300 200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="250" height="250" fill="${this.shapeColor}"/>
            <text x="180" y="105" font-size="48px" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};

module.exports = square;