describe('async', () => {
  it('should be done after 400ms', (done) => {
    executesAsync((v) => {
      expect(v).toBe('Hello World'); 
      done();
    });
  });
});