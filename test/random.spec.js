describe('Math.random stuff', () => {
  it('controls Math.random', () => {
    const originalMathRandom = Math.random;
    Math.random = () => {
      return 0.26490893326194676;
    }

    const result = randomNumberProducer();
    expect(result).toBe(0.26490893326194676);

    Math.random = originalMathRandom;
  });

  it('should replace Math.random with a spy', () => {
    const randomValue = 0.26490893326194676;
    const originalMathRandom = Math.random;
    
    Math.random = jasmine.createSpy('Math.random');
    Math.random.and.returnValue(randomValue);
    
    const result = randomNumberProducer();
    expect(result).toBe(randomValue);
    
    Math.random = originalMathRandom;
  });
  
  it('should replace Math.random with a beautiful spy', () => {
    const randomValue = 0.26490893326194676;
    spyOn(Math, 'random');
    Math.random.and.returnValue(randomValue);

    const result = randomNumberProducer();

    expect(result).toBe(randomValue);
    expect(Math.random).toHaveBeenCalledTimes(1);
  })
});