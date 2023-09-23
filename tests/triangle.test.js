const triangle = require('../lib/triangle');

//Tests the triangle

describe ('triangle', () => {
    it('should return a triangle', () => {
        const svgTriangle = new triangle ('SSS', 'white', 'pink');
        const result = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="pink" /><text x="100" y="160" font-size="44px" text-anchor="middle" fill="white">SSS</text></svg>`
        expect(svgTriangle.render()).toEqual(result);

    })
})