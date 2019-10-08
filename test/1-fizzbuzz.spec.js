describe('FizzBuzz', () => {
  let fb;
  beforeEach(() => {
    fb = new FizzBuzz();
  });

  it ('should return 1 if 1 is provided', () => {
    const result = fb.run(1);
    expect(result).toBe(1);
  });
  it ('should return 2 if 2 is provided', () => {
    const result = fb.run(2);
    expect(result).toBe(2);
  });
  it ('should return Fizz if 3 is provided', () => {
    const result = fb.run(3);
    expect(result).toBe('Fizz');
  });
  it ('should return Buzz if 5 is provided', () => {
    const result = fb.run(5);
    expect(result).toBe('Buzz');
  });
  it ('should return Fizz if 6 is provided', () => {
    const result = fb.run(6);
    expect(result).toBe('Fizz');
  });
  it ('should return Buzz if 10 is provided', () => {
    const result = fb.run(10);
    expect(result).toBe('Buzz');
  });
  it ('should return FizzBuzz if 15 is provided', () => {
    const result = fb.run(15);
    expect(result).toBe('FizzBuzz');
  });
  it ('should return FizzBuzz if 30 is provided', () => {
    const result = fb.run(30);
    expect(result).toBe('FizzBuzz');
  });
  it('should return Fizz if 999 is provided', () => {
    const result = fb.run(999);
    expect(result).toBe('Fizz');
  })
  it('should return Buzz if 515 is provided', () => {
    const result = fb.run(515);
    expect(result).toBe('Buzz');
  })
  it('should return FizzBuzz if 675 is provided', () => {
    const result = fb.run(675);
    expect(result).toBe('FizzBuzz');
  })
})