describe('Closure', () => {
  it('should return a function', () => {
    const func = returnsSomeFunction();
    expect(func).toEqual(jasmine.any(Function));
  });
});