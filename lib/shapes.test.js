const { Circle, Triangle, Square } = require('./shapes');

describe('Shape rendering', () => {
  test('Circle renders correctly', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Triangle renders correctly', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toBe('<polygon height= 100% width= 100% points="0,200,300,200,150,0" fill="green" />');
  });

  test('Square renders correctly', () => {
    const square = new Square('blue');
    expect(square.render()).toBe('<rect x="50" width="200" height="300" fill="blue" />');
  });
});
