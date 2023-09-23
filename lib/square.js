const shape = require('./shapes');

//square class uses the data found in class shape
//render returns square logo

class square extends shape {
    constructor(text, fontColor, logoColor) {
        super(text, fontColor, logoColor);
    };
    render() {
        return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="250" height="250" fill="${this.logoColor}"/><text x="130" y="120" font-size="48px" text-anchor="middle" fill="${this.fontColor}">${this.text}</text></svg>`
    };
};

module.exports = square;