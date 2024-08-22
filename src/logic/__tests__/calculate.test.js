import calculate from '../calculate';

describe('calculate', () => {
  it('returns the correct result for addition', () => {
    const calcState = { total: '1', next: '2', operation: '+' };
    const result = calculate(calcState, '=');
    expect(result.total).toBe('3');
  });

  it('handles clearing the calculator', () => {
    const calcState = { total: '1', next: '2', operation: '+' };
    const result = calculate(calcState, 'AC');
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  // Add more tests for other operations and buttons
});
