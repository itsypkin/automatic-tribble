const { helloWorld } = require('./index');

test('helloWorld returns correct message', () => {
  expect(helloWorld()).toBe('Hello, World!');
});
