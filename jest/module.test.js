import { add, multiply } from './module.js';

test('add 1 + 1', () => {
  expect(add(1, 1)).toBe(2);
});

test('multiply 3 * 5', () => {
  expect(multiply(3, 5)).toBe(15);
});
