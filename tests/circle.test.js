const circle = require('../lib/circle');

//Tests the circle

describe ('circle', () => {
 it('should return a circle', () => {
    const svgCircle = new circle('GHJ', 'black', 'yellow');
    const result = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><circle cx="180" cy="100" r="100" fill="yellow" /><text x="180" y="100" font-size="48px" text-anchor="middle" fill="black">GHJ</text></svg>`
    expect(svgCircle.render()).toEqual(result);

 })   
    
    
})