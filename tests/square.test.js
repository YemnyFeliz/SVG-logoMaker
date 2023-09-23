const square = require('../lib/square');

describe ('square', () => {
    it('it should return a square', () => {
        const svgSquare = new square('ASD', 'green', 'blue');
        const result = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="250" height="250" fill="blue"/><text x="130" y="120" font-size="48px" text-anchor="middle" fill="green">ASD</text></svg>`
        expect(svgSquare.render()).toEqual(result);
    })
})