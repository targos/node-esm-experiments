import { add } from './module.js';

export function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < a; i++) {
    result = add(result, b);
  }
  return result;
}
