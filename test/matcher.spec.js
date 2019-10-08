describe('Matchers', () => {
  it('should perform an expectation', () => {
    expect(true).toBe(true);
    expect(true).not.toBe(false);
    const obj = {
      name: 'Basti'
    }
    expect(obj).toEqual({name: 'Basti'});
    // does not work because of ===
    // expect(obj).toBe({name: 'Basti'});
    expect('Hello World').toBeTruthy();
    expect('').toBeFalsy();
    let foo;
    expect(foo).toBeUndefined();
    expect(obj).toBeDefined();
  });

  it('checks the correct type', () => {
    const fb = new FizzBuzz();
    expect(fb).toEqual(jasmine.any(FizzBuzz));
    expect(fb).toEqual(jasmine.any(Object));
    expect('foo').not.toEqual(jasmine.any(Number));
    expect(fb.run).toEqual(jasmine.any(Function));
    expect(1.99).toBeCloseTo(2, 1);
  });

  it('throws an error', () => {
    expect(throwsSomething).toThrow();
    expect(throwsSomething).toThrow(new Error('WAT 👻'));
    expect(throwsSomething).toThrowError();
    expect(throwsSomething).toThrowError('WAT 👻');

    expect(() => {throwsSomething()}).toThrow();
  });
});