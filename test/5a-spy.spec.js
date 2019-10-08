describe('asyncClock', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should call the function after 400ms with Hallo Welt', () => {
    const spy = jasmine.createSpy('async spy');
    asyncClock(spy);
    jasmine.clock().tick(400);
    expect(spy).toHaveBeenCalledWith('Hallo Welt');
  });
  
  it('should call the function after 600ms with how are you', () => {
    const spy = jasmine.createSpy('async spy');
    asyncClock(spy, 'Hello World', 600);
    jasmine.clock().tick(400);
    expect(spy).not.toHaveBeenCalled();
    jasmine.clock().tick(200);
    expect(spy).toHaveBeenCalledWith('Hello World');
  });
});
