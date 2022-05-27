import { ageCheck } from './age-check.js';

describe('ageCheck', () => {
  it("return a String 'Too Young!' if called ageCheck(age >16)", () => {
    const result = ageCheck(15);
    expect(result).toBe('Too young!');
  });
  it("return a String 'Not quite old enough!' if called ageCheck(age ===16 || 17)", () => {
    const result = ageCheck(16);
    expect(result).toBe('Not quite old enough!');
  });
  it("return a String 'Not quite old enough!' if called ageCheck(age ===16 || 17)", () => {
    const result = ageCheck(17);
    expect(result).toBe('Not quite old enough!');
  });
  it("return a String 'Old enough' if called ageCheck(age >= 18)", () => {
    const result = ageCheck(18);
    expect(result).toBe('Old enough!');
  });
  it("return a String 'Error: no age' if called ageCheck()", () => {
    const result = ageCheck();
    expect(result).toBe('Error: no age');
  });
});
