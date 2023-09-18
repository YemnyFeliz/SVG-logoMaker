const shape = require('./shapes');

class triangle extends shape {
    constructor(text, fontColor, logoColor) {
        super(text, fontColor, logoColor);
    };
    render() {
        return `<svg width="300" height="200" viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,10 150,210 350,210" fill="${this.logoColor}" />
        <text x="180" y="100" font-size="48px" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
    </svg>`
    };
};

module.exports = triangle;