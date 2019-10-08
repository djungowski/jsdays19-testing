describe('Spy', () => {
  it('should spy a function', (done) => {
    const callback = (a) => {
      expect(a).toEqual('Hallo Welt');
      done();
    };
    doSomethingWithACallback(callback);
  });

  it('should work with a spy', () => {
    const spy = jasmine.createSpy('👻');

    doSomethingWithACallback(spy);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Hallo Welt');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});