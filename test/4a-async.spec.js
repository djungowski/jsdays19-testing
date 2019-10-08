describe('async', () => {
  it('should call the function after 400ms with Hallo Welt', (done) => {
    async((value) => {
      expect(value).toBe('Hallo Welt'); 
      done();
    });
  });
  it('should call the function after 400ms with how are you', (done) => {
    async((value) => {
      expect(value).toBe('How are you?'); 
      done();
    }, 'How are you?', 400);
  });
});