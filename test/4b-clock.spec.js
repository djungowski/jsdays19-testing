describe('asyncClock', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should call the function after 400ms with Hallo Welt', (done) => {
    asyncClock((value) => {
      expect(value).toBe('Hallo Welt'); 
      done();
    });
    jasmine.clock().tick(400);
  });
  
  it('should call the function after 600ms with how are you', (done) => {
    asyncClock((value) => {
      expect(value).toBe('How are you?'); 
      done();
    }, 'How are you?', 600);
    jasmine.clock().tick(600);
  });
});
