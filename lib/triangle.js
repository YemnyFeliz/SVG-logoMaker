const shape = require('./shapes');

//triangle class uses the data found in class shape
//render returns triangle logo

class triangle extends shape {
    constructor(text, fontColor, logoColor) {
        super(text, fontColor, logoColor);
    };
    render() {
        return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="${this.logoColor}" /><text x="100" y="160" font-size="44px" text-anchor="middle" fill="${this.fontColor}">${this.text}</text></svg>`
    };
};

module.exports = triangle;