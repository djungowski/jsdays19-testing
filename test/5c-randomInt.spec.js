describe('Get random integers', () => {

  it('should return 5 as random integer', () => {
    // arrange
    const randomNumber = 0.512325436356;
    spyOn(Math, 'random').and.returnValue(randomNumber);
    spyOn(Math, 'floor').and.callThrough();

    // act
    const result = getRandomInteger();

    // assert
    expect(Math.random).toHaveBeenCalledTimes(1);
    expect(Math.floor).toHaveBeenCalledWith(randomNumber * 10);
    expect(result).toBe(5); 
  })
});