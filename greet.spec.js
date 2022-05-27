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
});
