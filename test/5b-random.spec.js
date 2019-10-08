describe('Math.random stuff', () => {

  it('should return a number in any case', () => {
    const result = getRandomNumber();
    expect(result).toEqual(jasmine.any(Number));
  })
  
  it('should replace Math.random with a beautiful spy', () => {
    const randomValue = 0.26490893326194676;
    spyOn(Math, 'random');
    Math.random.and.returnValue(randomValue);

    const result = getRandomNumber();

    expect(result).toBe(randomValue);
    expect(result).toEqual(jasmine.any(Number));
    expect(Math.random).toHaveBeenCalledTimes(1);
  })
});