const { calculate, clearResult } = require('./calculator');

describe('Calculator', () => {
  it('should calculate simple arithmetic expressions', () => {
    expect(calculate('2 + 2')).toBe(4);
    expect(calculate('2 * 3')).toBe(6);
    expect(calculate('10 / 2')).toBe(5);
  });

  it('should handle errors', () => {
    expect(calculate('2 +')).toBe("Error");
  });

  it('should clear the result', () => {
    expect(clearResult()).toBe("");
  });
});


