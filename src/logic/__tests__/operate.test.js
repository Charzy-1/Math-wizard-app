import Big from 'big.js';
import operate from '../operate';

describe('operate', () => {
  it('adds two numbers correctly', () => {
    const result = operate(Big(1), Big(2), '+');
    expect(result).toBe('3');
  });

  it('subtracts two numbers correctly', () => {
    const result = operate(Big(2), Big(1), '-');
    expect(result).toBe('1');
  });

  // Add more tests for other operations
});
