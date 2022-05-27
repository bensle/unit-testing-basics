import { greet } from './greet.js';

describe('greet', () => {
  it("return a String 'Hello Jane! if called greet('Jane')", () => {
    const result = greet('Jane');
    expect(result).toBe('Hello Jane!');
  });

  it("return a String 'Hello stranger! if called greet()", () => {
    const result = greet();
    expect(result).toBe('Hello stranger!');
  });

  it("return a String 'Hello coach! if called greet(Alex)", () => {
    const result1 = greet('Alex');
    const result2 = greet('Lene');
    const result3 = greet('Andrea');
    expect(result1).toBe('Hello coach!');
    expect(result2).toBe('Hello coach!');
    expect(result3).toBe('Hello coach!');
  });
});
