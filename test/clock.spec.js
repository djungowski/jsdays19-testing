describe('async', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should be done after 5000ms', (done) => {
    executesAsyncWithClock((v) => {
      expect(v).toBe('Hello World'); 
      done();
    });
    jasmine.clock().tick(5000);
  });
});