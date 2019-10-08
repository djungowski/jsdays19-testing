describe('numberChecker', () => {
  it('should return a number if a number is provided', () => {
    const result = numberChecker(1);
    expect(result).toBe(1);
  });

  it('checks expectation with try-catch', () => {
      try {
          numberChecker('foobar');
          fail('Should not execute');
      } catch(e) {
          expect(e.message).toEqual('NaaaaN');
      }
  });

  it('should throw an error if a string is provided', () => {
    expect(() => numberChecker('a')).toThrow();
    expect(() => numberChecker('a')).toThrow(new Error('NaaaaN'));
    expect(() => numberChecker('a')).toThrowError('NaaaaN');
  });

  it('should throw an error if an array is provided', () => {
    expect(() => numberChecker([])).toThrowError('NaaaaN');
  });
});